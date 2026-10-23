/** A small, dependency-free decorative orbit field. */
export function initOrbit(canvas) {
  const context = canvas?.getContext('2d');
  if (!context) return { refresh() {}, setPaused() {}, destroy() {} };

  const root = document.documentElement;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const tau = Math.PI * 2;
  const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };
  let width = 0;
  let height = 0;
  let ratio = 1;
  let mobile = false;
  let paused = false;
  let destroyed = false;
  let frameId = 0;
  let lastTime = 0;
  let lastDraw = 0;
  let elapsed = 0;
  let colors = {};

  canvas.setAttribute('aria-hidden', 'true');

  function readColors() {
    const styles = getComputedStyle(root);
    colors = {
      foreground: styles.getPropertyValue('--fg').trim() || '#e8edeb',
      accent: styles.getPropertyValue('--accent').trim() || '#92c7ae',
      orbit: styles.getPropertyValue('--orbit').trim() || '#667f77',
    };
  }

  function draw() {
    if (destroyed || !width || !height) return;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    context.clearRect(0, 0, width, height);
    context.save();
    const cx = width * (mobile ? 0.94 : 0.8) + pointer.x * 12;
    const cy = height * (mobile ? 0.43 : 0.49) + pointer.y * 9;
    const radius = Math.min(width * (mobile ? 0.59 : 0.42), height * 0.53);

    context.fillStyle = colors.foreground;
    context.globalAlpha = 0.045;
    context.beginPath();
    context.arc(cx, cy, radius * 0.135, 0, tau);
    context.fill();
    context.strokeStyle = colors.accent;
    context.globalAlpha = 0.32;
    context.lineWidth = 0.9;
    context.stroke();

    for (let n = 0; n < 4; n += 1) {
      const rx = radius * (0.72 + n * 0.12);
      const ry = radius * (0.22 + n * 0.075);
      const angle = -0.83 + n * 0.49 + Math.sin(elapsed * 0.035 + n) * 0.025;
      const cosine = Math.cos(angle);
      const sine = Math.sin(angle);

      context.beginPath();
      context.ellipse(cx, cy, rx, ry, angle, 0, tau);
      context.strokeStyle = n === 2 ? colors.accent : colors.orbit;
      context.globalAlpha = n === 2 ? 0.4 : 0.54;
      context.lineWidth = n === 2 ? 1.1 : 0.8;
      context.stroke();

      const phase = elapsed * (0.084 + n * 0.0161) + n * 1.64;
      const x = rx * Math.cos(phase);
      const y = ry * Math.sin(phase);
      const px = cx + x * cosine - y * sine;
      const py = cy + x * sine + y * cosine;

      context.beginPath();
      context.arc(px, py, n === 2 ? 3.4 : 2.5, 0, tau);
      context.fillStyle = colors.accent;
      context.globalAlpha = 0.88;
      context.fill();

      if (!mobile) {
        context.beginPath();
        context.arc(px, py, n === 2 ? 7.5 : 6, 0, tau);
        context.strokeStyle = colors.accent;
        context.globalAlpha = 0.23;
        context.lineWidth = 0.8;
        context.stroke();
      }
    }

    context.strokeStyle = colors.orbit;
    context.globalAlpha = 0.42;
    context.lineWidth = 0.8;
    for (const scale of mobile ? [1.2] : [1.2, 1.27]) {
      context.beginPath();
      context.arc(cx, cy, radius * scale, 0, tau);
      context.stroke();
    }
    context.restore();
  }

  function canAnimate() {
    return !destroyed && !paused && !reduced.matches && !document.hidden;
  }

  function frame(now) {
    frameId = 0;
    if (!canAnimate()) return;
    const delta = lastTime ? Math.min((now - lastTime) / 1000, 0.08) : 0;
    lastTime = now;
    elapsed += delta;
    const easing = 1 - Math.exp(-delta * 4);
    pointer.x += (pointer.targetX - pointer.x) * easing;
    pointer.y += (pointer.targetY - pointer.y) * easing;
    // Thirty frames per second is sufficient for this deliberately slow field.
    if (!lastDraw || now - lastDraw >= 1000 / 30 - 1) {
      draw();
      lastDraw = now;
    }
    frameId = requestAnimationFrame(frame);
  }

  function syncAnimation() {
    if (frameId) cancelAnimationFrame(frameId);
    frameId = 0;
    lastTime = 0;
    lastDraw = 0;
    if (canAnimate()) frameId = requestAnimationFrame(frame);
  }

  function resize() {
    if (destroyed) return;
    width = window.innerWidth;
    height = window.innerHeight;
    mobile = width < 680;
    ratio = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    draw();
  }

  function move(event) {
    if (!canAnimate() || event.pointerType === 'touch') return;
    pointer.targetX = (event.clientX / Math.max(width, 1) - 0.5) * 2;
    pointer.targetY = (event.clientY / Math.max(height, 1) - 0.5) * 2;
  }

  function leave(event) {
    if (event?.type === 'pointerout' && event.relatedTarget) return;
    pointer.targetX = 0;
    pointer.targetY = 0;
  }

  function preferenceChanged() {
    if (reduced.matches) {
      pointer.x = pointer.y = pointer.targetX = pointer.targetY = 0;
    }
    draw();
    syncAnimation();
  }

  function visibilityChanged() {
    syncAnimation();
    if (!document.hidden) draw();
  }

  window.addEventListener('resize', resize, { passive: true });
  window.addEventListener('pointermove', move, { passive: true });
  window.addEventListener('pointerout', leave, { passive: true });
  window.addEventListener('blur', leave, { passive: true });
  document.addEventListener('visibilitychange', visibilityChanged);
  reduced.addEventListener('change', preferenceChanged);
  readColors();
  resize();
  syncAnimation();

  return {
    refresh() {
      if (destroyed) return;
      readColors();
      draw();
    },
    setPaused(value) {
      if (destroyed) return;
      paused = Boolean(value);
      draw();
      syncAnimation();
    },
    destroy() {
      destroyed = true;
      if (frameId) cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerout', leave);
      window.removeEventListener('blur', leave);
      document.removeEventListener('visibilitychange', visibilityChanged);
      reduced.removeEventListener('change', preferenceChanged);
      context.clearRect(0, 0, canvas.width, canvas.height);
    },
  };
}
