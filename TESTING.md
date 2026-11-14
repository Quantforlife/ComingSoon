# Test report (what was actually run)
Environment: headless Chromium (software WebGL) via Playwright, served by python http.server, no internet.
- JS syntax check of all three scripts (node --check): pass.
- Desktop 1440x900 and mobile 390x844: page loads, 3D scene renders, scroll positions 0/30/62/97% captured, no horizontal overflow, no script errors. Only console error: Google Fonts unreachable in the sandbox (fallback fonts used).
- Form: submitting an empty form shows validation, no false success.
- Screenshots reviewed: opening, mid-city (desktop and mobile), hackathon section. Fixes made from them: intro panel moved off the mascot, skybridge removed from the canyon view, stale chapter panel hidden under content sections, mobile camera kept inside the avenue.
## Not tested
Real GPU performance, tablets, slow network, reduced-motion mode, no-WebGL fallback, keyboard walkthrough, GitHub Pages deployment, form endpoint, screen readers, plaza/skyline/final frames on mobile.
## Known limitations
Mascot and buildings are procedural (no GLB); district panels are not clickable buildings; Chapter 4-6 framing not visually reviewed; fonts need internet; no logos supplied.
