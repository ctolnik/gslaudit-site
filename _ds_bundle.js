/* @ds-bundle: {"format":3,"namespace":"GSLAuditDesignSystem_166977","components":[{"name":"Accordion","sourcePath":"components/core/Accordion.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"ServiceCard","sourcePath":"components/core/ServiceCard.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"}],"sourceHashes":{"components/core/Accordion.jsx":"c69bd225f8b1","components/core/Avatar.jsx":"3b6b258f53d0","components/core/Badge.jsx":"3095e30b64de","components/core/Button.jsx":"ff1bb345a208","components/core/Card.jsx":"726e6471cda9","components/core/IconButton.jsx":"28deec930221","components/core/ServiceCard.jsx":"23956d0f6dc7","components/core/Tag.jsx":"81df5e7fa0e1","components/feedback/Alert.jsx":"4dd48b11841b","components/forms/Checkbox.jsx":"9919f9240913","components/forms/Input.jsx":"df78ec7ce5c7","components/forms/Select.jsx":"85886349bf85","components/forms/Switch.jsx":"b747dc662fab","ui_kits/website/App.jsx":"c6fa3aa283e7","ui_kits/website/ContactsPage.jsx":"e92a52971d73","ui_kits/website/Footer.jsx":"6a9bd4c86d98","ui_kits/website/Header.jsx":"1751dc9f9394","ui_kits/website/HomePage.jsx":"68971f41bbc2","ui_kits/website/Icons.jsx":"2841dab78030","ui_kits/website/ServicePage.jsx":"821c74780fc7","ui_kits/website/data.js":"e09bba850bbc"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GSLAuditDesignSystem_166977 = window.GSLAuditDesignSystem_166977 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Accordion.jsx
try { (() => {
/**
 * GSL Audit — Accordion
 * Disclosure list, used for FAQ and dense service detail.
 * `items`: [{ q, a }]. Single-open by default.
 */
function Accordion({
  items = [],
  allowMultiple = false,
  defaultOpen = [],
  style = {}
}) {
  const [open, setOpen] = React.useState(new Set(defaultOpen));
  const toggle = i => {
    setOpen(prev => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(i)) next.delete(i);else next.add(i);
      return next;
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      ...style
    }
  }, items.map((item, i) => {
    const isOpen = open.has(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderTop: i === 0 ? "1px solid var(--divider)" : "none",
        borderBottom: "1px solid var(--divider)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => toggle(i),
      "aria-expanded": isOpen,
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        background: "transparent",
        border: "none",
        cursor: "pointer",
        textAlign: "left",
        padding: "var(--space-5) 0",
        fontFamily: "var(--font-ui)",
        fontSize: "var(--fs-body-lg)",
        fontWeight: "var(--fw-semibold)",
        color: "var(--text-strong)"
      }
    }, item.q, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: "none",
        display: "inline-flex",
        color: "var(--accent)",
        transition: "transform var(--dur-base) var(--ease-standard)",
        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)"
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 5v14M5 12h14"
    })))), isOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: "var(--space-5)",
        maxWidth: "62ch",
        fontFamily: "var(--font-ui)",
        fontSize: "var(--fs-body)",
        lineHeight: "var(--lh-relaxed)",
        color: "var(--text-muted)"
      }
    }, item.a));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * GSL Audit — Avatar
 * Circular initials/photo for team, testimonials, account.
 */
function Avatar({
  src,
  name = "",
  size = "md",
  style = {},
  ...rest
}) {
  const sizes = {
    sm: 32,
    md: 44,
    lg: 56,
    xl: 72
  };
  const dim = sizes[size] || sizes.md;
  const initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map(s => s[0]).join("").toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: dim,
      height: dim,
      flex: "none",
      borderRadius: "var(--radius-pill)",
      background: "var(--accent-soft)",
      color: "var(--accent-on-soft)",
      overflow: "hidden",
      fontFamily: "var(--font-ui)",
      fontWeight: "var(--fw-semibold)",
      fontSize: dim * 0.38,
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * GSL Audit — Badge
 * Small status / category label. Subtle by default.
 */
function Badge({
  tone = "neutral",
  variant = "soft",
  style = {},
  children,
  ...rest
}) {
  const tones = {
    neutral: {
      soft: ["var(--neutral-100)", "var(--neutral-700)"],
      solid: ["var(--neutral-800)", "var(--white)"]
    },
    accent: {
      soft: ["var(--accent-soft)", "var(--accent-on-soft)"],
      solid: ["var(--accent)", "var(--text-on-accent)"]
    },
    taupe: {
      soft: ["var(--taupe-100)", "var(--taupe-700)"],
      solid: ["var(--taupe-600)", "var(--white)"]
    },
    success: {
      soft: ["var(--success-soft)", "var(--success)"],
      solid: ["var(--success)", "var(--white)"]
    },
    warning: {
      soft: ["var(--warning-soft)", "var(--warning)"],
      solid: ["var(--warning)", "var(--white)"]
    },
    danger: {
      soft: ["var(--danger-soft)", "var(--danger)"],
      solid: ["var(--danger)", "var(--white)"]
    },
    info: {
      soft: ["var(--info-soft)", "var(--info)"],
      solid: ["var(--info)", "var(--white)"]
    }
  };
  const [bg, fg] = (tones[tone] || tones.neutral)[variant] || tones.neutral.soft;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      background: bg,
      color: fg,
      fontFamily: "var(--font-ui)",
      fontSize: "var(--fs-caption)",
      fontWeight: "var(--fw-semibold)",
      lineHeight: 1,
      letterSpacing: "0.01em",
      padding: "5px 10px",
      borderRadius: "var(--radius-sm)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * GSL Audit — Button
 * Primary action component. Soft 12px radius, restrained green accent.
 */
function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  iconLeft = null,
  iconRight = null,
  disabled = false,
  type = "button",
  style = {},
  children,
  ...rest
}) {
  const sizes = {
    sm: {
      height: 38,
      padding: "0 16px",
      fontSize: "var(--fs-small)",
      gap: 8
    },
    md: {
      height: 46,
      padding: "0 22px",
      fontSize: "var(--fs-body)",
      gap: 9
    },
    lg: {
      height: 54,
      padding: "0 30px",
      fontSize: "var(--fs-body-lg)",
      gap: 10
    }
  };
  const variants = {
    primary: {
      background: "var(--accent)",
      color: "var(--text-on-accent)",
      border: "1px solid var(--accent)"
    },
    secondary: {
      background: "var(--surface-card)",
      color: "var(--text-strong)",
      border: "1px solid var(--border-default)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-accent)",
      border: "1px solid transparent"
    },
    soft: {
      background: "var(--accent-soft)",
      color: "var(--accent-on-soft)",
      border: "1px solid transparent"
    },
    inverse: {
      background: "var(--white)",
      color: "var(--green-900)",
      border: "1px solid var(--white)"
    }
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    className: `gsl-btn gsl-btn--${variant}`,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      width: fullWidth ? "100%" : "auto",
      fontFamily: "var(--font-ui)",
      fontWeight: "var(--fw-semibold)",
      fontSize: s.fontSize,
      lineHeight: 1,
      letterSpacing: "0.005em",
      borderRadius: "var(--radius-button)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      whiteSpace: "nowrap",
      transition: "background-color var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)",
      ...v,
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * GSL Audit — Card
 * Surface container. Soft 16px radius, hairline border, subtle shadow.
 */
function Card({
  interactive = false,
  padding = "lg",
  as = "div",
  style = {},
  className = "",
  children,
  ...rest
}) {
  const pads = {
    none: 0,
    sm: "var(--space-4)",
    md: "var(--space-6)",
    lg: "var(--space-8)"
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: `gsl-card${interactive ? " gsl-card--interactive" : ""} ${className}`.trim(),
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-card)",
      boxShadow: "var(--shadow-card)",
      padding: pads[padding] ?? pads.lg,
      cursor: interactive ? "pointer" : "default",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * GSL Audit — IconButton
 * Square/circular button for a single icon (toolbar, close, nav).
 */
function IconButton({
  variant = "ghost",
  size = "md",
  round = false,
  disabled = false,
  ariaLabel,
  style = {},
  children,
  ...rest
}) {
  const sizes = {
    sm: 34,
    md: 42,
    lg: 50
  };
  const dim = sizes[size] || sizes.md;
  const variants = {
    ghost: {
      background: "transparent",
      color: "var(--text-muted)",
      border: "1px solid transparent"
    },
    soft: {
      background: "var(--accent-soft)",
      color: "var(--accent-on-soft)",
      border: "1px solid transparent"
    },
    outline: {
      background: "var(--surface-card)",
      color: "var(--text-strong)",
      border: "1px solid var(--border-default)"
    },
    solid: {
      background: "var(--accent)",
      color: "var(--text-on-accent)",
      border: "1px solid var(--accent)"
    }
  };
  const v = variants[variant] || variants.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": ariaLabel,
    disabled: disabled,
    className: `gsl-iconbtn gsl-iconbtn--${variant}`,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: dim,
      height: dim,
      flex: "none",
      borderRadius: round ? "var(--radius-pill)" : "var(--radius-md)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...v,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * GSL Audit — ServiceCard
 * Brand pattern for the services catalog (20+ services).
 * Icon slot, title, short description, optional price/meta and arrow affordance.
 */
function ServiceCard({
  icon = null,
  title,
  description,
  meta,
  href = "#",
  tone = "default",
  style = {},
  ...rest
}) {
  const accent = tone === "taupe" ? "var(--taupe-100)" : "var(--accent-soft)";
  const accentFg = tone === "taupe" ? "var(--taupe-700)" : "var(--accent)";
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    className: "gsl-card gsl-card--interactive",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-card)",
      boxShadow: "var(--shadow-card)",
      padding: "var(--space-7)",
      textDecoration: "none",
      color: "inherit",
      height: "100%",
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 52,
      height: 52,
      borderRadius: "var(--radius-md)",
      background: accent,
      color: accentFg,
      flex: "none"
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-h6)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-strong)",
      lineHeight: "var(--lh-heading)",
      margin: 0
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--fs-small)",
      lineHeight: "var(--lh-normal)",
      color: "var(--text-muted)",
      margin: 0
    }
  }, description)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
      marginTop: "auto"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--fs-small)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-muted)"
    }
  }, meta), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: accentFg
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  })))));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * GSL Audit — Tag / Chip
 * Pill-shaped filter or category token. Optional removable / selected states.
 */
function Tag({
  selected = false,
  removable = false,
  onRemove,
  style = {},
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      background: selected ? "var(--accent)" : "var(--surface-card)",
      color: selected ? "var(--text-on-accent)" : "var(--text-body)",
      border: `1px solid ${selected ? "var(--accent)" : "var(--border-default)"}`,
      fontFamily: "var(--font-ui)",
      fontSize: "var(--fs-small)",
      fontWeight: "var(--fw-medium)",
      lineHeight: 1,
      padding: "8px 14px",
      borderRadius: "var(--radius-pill)",
      cursor: "pointer",
      transition: "var(--transition-colors)",
      ...style
    }
  }, rest), children, removable && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
    onClick: e => {
      e.stopPropagation();
      onRemove && onRemove(e);
    },
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 16,
      height: 16,
      padding: 0,
      border: "none",
      borderRadius: "var(--radius-pill)",
      background: "transparent",
      color: "inherit",
      cursor: "pointer",
      opacity: 0.7
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * GSL Audit — Alert / Callout
 * Inline message banner for info, success, warning, danger.
 */
function Alert({
  tone = "info",
  title,
  icon = null,
  onClose,
  style = {},
  children,
  ...rest
}) {
  const tones = {
    info: ["var(--info-soft)", "var(--info)", "var(--info)"],
    success: ["var(--success-soft)", "var(--success)", "var(--success)"],
    warning: ["var(--warning-soft)", "var(--warning)", "var(--warning)"],
    danger: ["var(--danger-soft)", "var(--danger)", "var(--danger)"],
    accent: ["var(--accent-soft)", "var(--accent)", "var(--accent-on-soft)"]
  };
  const [bg, accent, titleColor] = tones[tone] || tones.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: "flex",
      gap: 12,
      alignItems: "flex-start",
      background: bg,
      borderRadius: "var(--radius-md)",
      borderLeft: `3px solid ${accent}`,
      padding: "var(--space-4) var(--space-5)",
      fontFamily: "var(--font-ui)",
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: accent,
      display: "inline-flex",
      marginTop: 1,
      flex: "none"
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-body)",
      fontWeight: "var(--fw-semibold)",
      color: titleColor,
      marginBottom: children ? 3 : 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-small)",
      color: "var(--text-body)",
      lineHeight: "var(--lh-normal)"
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
    onClick: onClose,
    style: {
      border: "none",
      background: "transparent",
      color: "var(--text-muted)",
      cursor: "pointer",
      padding: 2,
      display: "inline-flex",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * GSL Audit — Checkbox
 * Controlled or uncontrolled checkbox with label.
 */
function Checkbox({
  checked,
  defaultChecked,
  onChange,
  label,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const cbId = id || (label ? `cb-${String(label).replace(/\s+/g, "-").toLowerCase()}` : undefined);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : undefined;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cbId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.55 : 1,
      fontFamily: "var(--font-ui)",
      fontSize: "var(--fs-body)",
      color: "var(--text-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: cbId,
    type: "checkbox",
    disabled: disabled,
    checked: on,
    defaultChecked: defaultChecked,
    onChange: onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: 20,
      height: 20,
      margin: 0,
      cursor: "inherit"
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "gsl-check-box",
    "data-checked": on,
    style: {
      width: 20,
      height: 20,
      borderRadius: "var(--radius-xs)",
      border: "1.5px solid var(--border-strong)",
      background: "var(--surface-card)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--white)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      opacity: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })))), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * GSL Audit — Input
 * Text field with optional label, helper, error and leading icon.
 */
function Input({
  label,
  helper,
  error,
  required = false,
  leadingIcon = null,
  id,
  style = {},
  containerStyle = {},
  ...rest
}) {
  const inputId = id || (label ? `in-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 7,
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--fs-small)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-strong)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--danger)",
      marginLeft: 3
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, leadingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 14,
      display: "inline-flex",
      color: "var(--text-faint)",
      pointerEvents: "none"
    }
  }, leadingIcon), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    className: "gsl-input",
    style: {
      width: "100%",
      height: 46,
      padding: leadingIcon ? "0 16px 0 42px" : "0 16px",
      fontFamily: "var(--font-ui)",
      fontSize: "var(--fs-body)",
      color: "var(--text-strong)",
      background: "var(--surface-card)",
      border: `1px solid ${error ? "var(--danger)" : "var(--border-default)"}`,
      borderRadius: "var(--radius-input)",
      transition: "var(--transition-colors)",
      ...style
    }
  }, rest))), (helper || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--fs-caption)",
      color: error ? "var(--danger)" : "var(--text-muted)"
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * GSL Audit — Select
 * Styled native select with custom chevron and optional label.
 */
function Select({
  label,
  helper,
  error,
  id,
  options = [],
  style = {},
  containerStyle = {},
  children,
  ...rest
}) {
  const selId = id || (label ? `sel-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 7,
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--fs-small)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-strong)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    className: "gsl-select",
    style: {
      appearance: "none",
      WebkitAppearance: "none",
      width: "100%",
      height: 46,
      padding: "0 40px 0 16px",
      fontFamily: "var(--font-ui)",
      fontSize: "var(--fs-body)",
      color: "var(--text-strong)",
      background: "var(--surface-card)",
      border: `1px solid ${error ? "var(--danger)" : "var(--border-default)"}`,
      borderRadius: "var(--radius-input)",
      cursor: "pointer",
      transition: "var(--transition-colors)",
      ...style
    }
  }, rest), children || options.map(o => /*#__PURE__*/React.createElement("option", {
    key: typeof o === "string" ? o : o.value,
    value: typeof o === "string" ? o : o.value
  }, typeof o === "string" ? o : o.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 14,
      pointerEvents: "none",
      color: "var(--text-muted)",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  })))), (helper || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--fs-caption)",
      color: error ? "var(--danger)" : "var(--text-muted)"
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * GSL Audit — Switch
 * Toggle for binary settings.
 */
function Switch({
  checked,
  defaultChecked,
  onChange,
  label,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const swId = id || (label ? `sw-${String(label).replace(/\s+/g, "-").toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: swId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.55 : 1,
      fontFamily: "var(--font-ui)",
      fontSize: "var(--fs-body)",
      color: "var(--text-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: swId,
    type: "checkbox",
    role: "switch",
    disabled: disabled,
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: 44,
      height: 26,
      margin: 0,
      cursor: "inherit"
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "gsl-switch-track",
    style: {
      width: 44,
      height: 26,
      borderRadius: "var(--radius-pill)",
      background: "var(--neutral-300)",
      display: "inline-flex",
      alignItems: "center",
      padding: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "gsl-switch-thumb",
    style: {
      width: 20,
      height: 20,
      borderRadius: "var(--radius-pill)",
      background: "var(--white)",
      boxShadow: "var(--shadow-sm)"
    }
  }))), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
// GSL Audit website — App shell with simple client-side routing
(function () {
  const React = window.React;
  const Header = window.GSLHeader;
  const Footer = window.GSLFooter;
  const pages = {
    home: window.GSLHomePage,
    service: window.GSLServicePage,
    contacts: window.GSLContactsPage
  };
  function App() {
    const [route, setRoute] = React.useState("home");
    const scroller = React.useRef(null);
    const navigate = r => {
      setRoute(r);
      if (scroller.current) scroller.current.scrollTop = 0;
    };
    const Page = pages[route] || pages.home;
    return /*#__PURE__*/React.createElement("div", {
      ref: scroller,
      className: "site",
      style: {
        height: "100vh",
        overflowY: "auto"
      }
    }, /*#__PURE__*/React.createElement(Header, {
      navigate: navigate
    }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Page, {
      navigate: navigate
    })), /*#__PURE__*/React.createElement(Footer, {
      navigate: navigate
    }));
  }
  window.GSLApp = App;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactsPage.jsx
try { (() => {
// GSL Audit website — Contacts + request form
(function () {
  const React = window.React;
  const NS = window.GSLAuditDesignSystem_166977;
  const {
    Button,
    Card,
    Input,
    Select,
    Checkbox,
    Alert
  } = NS;
  const I = window.GSLIcons;
  const {
    services
  } = window.GSLData;
  function ContactsPage() {
    const [sent, setSent] = React.useState(false);
    const [agree, setAgree] = React.useState(true);
    return /*#__PURE__*/React.createElement("section", {
      className: "section container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sec-head",
      style: {
        marginBottom: "var(--space-10)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "gsl-eyebrow"
    }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"), /*#__PURE__*/React.createElement("h2", null, "\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0437\u0430\u044F\u0432\u043A\u0443"), /*#__PURE__*/React.createElement("p", null, "\u041E\u043F\u0438\u0448\u0438\u0442\u0435 \u0437\u0430\u0434\u0430\u0447\u0443 \u2014 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0441\u0432\u044F\u0436\u0435\u0442\u0441\u044F \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u0440\u0430\u0431\u043E\u0447\u0435\u0433\u043E \u0434\u043D\u044F \u0438 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0438\u0442 \u0440\u0435\u0448\u0435\u043D\u0438\u0435, \u0441\u0440\u043E\u043A\u0438 \u0438 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C.")), /*#__PURE__*/React.createElement("div", {
      className: "grid-2",
      style: {
        gridTemplateColumns: "1.1fr 0.9fr",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement(Card, {
      padding: "lg",
      style: {
        boxShadow: "var(--shadow-md)"
      }
    }, sent ? /*#__PURE__*/React.createElement(Alert, {
      tone: "success",
      title: "\u0417\u0430\u044F\u0432\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430"
    }, "\u0421\u043F\u0430\u0441\u0438\u0431\u043E! \u041C\u044B \u0441\u0432\u044F\u0436\u0435\u043C\u0441\u044F \u0441 \u0432\u0430\u043C\u0438 \u0432 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043C\u044F.") : /*#__PURE__*/React.createElement("form", {
      onSubmit: e => {
        e.preventDefault();
        setSent(true);
      },
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-5)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "grid-2",
      style: {
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "\u0418\u043C\u044F",
      placeholder: "\u041A\u0430\u043A \u043A \u0432\u0430\u043C \u043E\u0431\u0440\u0430\u0449\u0430\u0442\u044C\u0441\u044F",
      required: true
    }), /*#__PURE__*/React.createElement(Input, {
      label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
      type: "tel",
      placeholder: "+7 ___ ___-__-__",
      required: true
    })), /*#__PURE__*/React.createElement(Input, {
      label: "Email",
      type: "email",
      leadingIcon: /*#__PURE__*/React.createElement(I.Mail, {
        width: 17,
        height: 17
      }),
      placeholder: "you@company.ru"
    }), /*#__PURE__*/React.createElement(Select, {
      label: "\u0418\u043D\u0442\u0435\u0440\u0435\u0441\u0443\u044E\u0449\u0430\u044F \u0443\u0441\u043B\u0443\u0433\u0430",
      options: services.map(s => s.title)
    }), /*#__PURE__*/React.createElement(Input, {
      label: "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439",
      placeholder: "\u041A\u043E\u0440\u043E\u0442\u043A\u043E \u043E \u0437\u0430\u0434\u0430\u0447\u0435"
    }), /*#__PURE__*/React.createElement(Checkbox, {
      label: "\u0421\u043E\u0433\u043B\u0430\u0441\u0435\u043D \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445",
      checked: agree,
      onChange: e => setAgree(e.target.checked)
    }), /*#__PURE__*/React.createElement(Button, {
      type: "submit",
      variant: "primary",
      size: "lg",
      disabled: !agree,
      iconRight: /*#__PURE__*/React.createElement(I.ArrowRight, {
        width: 18,
        height: 18
      })
    }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-4)"
      }
    }, [{
      ic: "Phone",
      t: "Телефон",
      v: "+7 495 234-38-44",
      d: "Пн–Пт, 10:00–19:00 МСК"
    }, {
      ic: "Mail",
      t: "Почта",
      v: "info@gsl.ru",
      d: "Ответим в течение дня"
    }, {
      ic: "MapPin",
      t: "Офис",
      v: "Москва, ул. Маросейка, 6/8с1",
      d: "Метро «Китай-город»"
    }].map(c => {
      const Ic = I[c.ic];
      return /*#__PURE__*/React.createElement(Card, {
        key: c.t,
        padding: "md",
        style: {
          display: "flex",
          gap: 16,
          alignItems: "flex-start"
        }
      }, /*#__PURE__*/React.createElement("span", {
        className: "feature__ic"
      }, /*#__PURE__*/React.createElement(Ic, {
        width: 20,
        height: 20
      })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: "var(--fs-caption)",
          color: "var(--text-muted)",
          textTransform: "uppercase",
          letterSpacing: ".08em",
          fontWeight: 600
        }
      }, c.t), /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: "var(--font-display)",
          fontSize: "var(--fs-h6)",
          color: "var(--text-strong)",
          margin: "3px 0 2px"
        }
      }, c.v), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: "var(--fs-small)",
          color: "var(--text-muted)"
        }
      }, c.d)));
    }))));
  }
  window.GSLContactsPage = ContactsPage;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactsPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
// GSL Audit website — Footer
(function () {
  const React = window.React;
  const I = window.GSLIcons;
  function Col({
    title,
    links,
    navigate
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, title), links.map(l => /*#__PURE__*/React.createElement("a", {
      key: l,
      onClick: () => navigate && navigate("service")
    }, l)));
  }
  function Footer({
    navigate
  }) {
    return /*#__PURE__*/React.createElement("footer", {
      className: "ftr"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ftr__grid"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
      className: "ftr__logo",
      src: "../../assets/logos/gsl-logo-reverse.svg",
      alt: "GSL Audit"
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        color: "var(--neutral-400)",
        fontSize: "var(--fs-small)",
        lineHeight: "var(--lh-relaxed)",
        maxWidth: "34ch"
      }
    }, "\u0410\u0443\u0434\u0438\u0442, \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0438\u044F, \u043D\u0430\u043B\u043E\u0433\u0438 \u0438 \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u0438 \u0447\u0430\u0441\u0442\u043D\u044B\u0445 \u043B\u0438\u0446 \u2014 \u0432 \u0420\u043E\u0441\u0441\u0438\u0438 \u0438 \u0437\u0430 \u0440\u0443\u0431\u0435\u0436\u043E\u043C."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 10,
        marginTop: "var(--space-6)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        gap: 10,
        alignItems: "center",
        color: "var(--neutral-300)",
        fontSize: "var(--fs-small)"
      }
    }, /*#__PURE__*/React.createElement(I.Phone, {
      width: 16,
      height: 16
    }), " +7 495 234-38-44"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        gap: 10,
        alignItems: "center",
        color: "var(--neutral-300)",
        fontSize: "var(--fs-small)"
      }
    }, /*#__PURE__*/React.createElement(I.Mail, {
      width: 16,
      height: 16
    }), " info@gsl.ru"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        gap: 10,
        alignItems: "center",
        color: "var(--neutral-300)",
        fontSize: "var(--fs-small)"
      }
    }, /*#__PURE__*/React.createElement(I.MapPin, {
      width: 16,
      height: 16
    }), " \u041C\u043E\u0441\u043A\u0432\u0430, \u0443\u043B. \u041C\u0430\u0440\u043E\u0441\u0435\u0439\u043A\u0430, 6/8\u04411"))), /*#__PURE__*/React.createElement(Col, {
      title: "\u0423\u0441\u043B\u0443\u0433\u0438",
      navigate: navigate,
      links: ["Аудит", "Бухгалтерия", "Налоговый консалтинг", "Юридические услуги"]
    }), /*#__PURE__*/React.createElement(Col, {
      title: "\u041C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u043E\u0435",
      navigate: navigate,
      links: ["КИК", "Зарубежные счета", "Регистрация компаний", "МСФО"]
    }), /*#__PURE__*/React.createElement(Col, {
      title: "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F",
      navigate: navigate,
      links: ["О нас", "Команда", "Блог", "Контакты"]
    })), /*#__PURE__*/React.createElement("div", {
      className: "ftr__bottom"
    }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 GSL Audit. \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B."), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        gap: "var(--space-6)"
      }
    }, /*#__PURE__*/React.createElement("a", {
      style: {
        display: "inline"
      }
    }, "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"), /*#__PURE__*/React.createElement("a", {
      style: {
        display: "inline"
      }
    }, "\u0423\u0441\u043B\u043E\u0432\u0438\u044F")))));
  }
  window.GSLFooter = Footer;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
// GSL Audit website — Header
(function () {
  const React = window.React;
  const {
    Button
  } = window.GSLAuditDesignSystem_166977;
  const I = window.GSLIcons;
  const {
    navServices
  } = window.GSLData;
  function Header({
    navigate
  }) {
    return /*#__PURE__*/React.createElement("header", {
      className: "hdr"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container hdr__row"
    }, /*#__PURE__*/React.createElement("img", {
      className: "hdr__logo",
      src: "../../assets/logos/gsl-logo-primary.svg",
      alt: "GSL Audit",
      style: {
        cursor: "pointer"
      },
      onClick: () => navigate("home")
    }), /*#__PURE__*/React.createElement("nav", {
      className: "hdr__nav"
    }, navServices.map(s => /*#__PURE__*/React.createElement("span", {
      key: s,
      className: "hdr__link",
      onClick: () => navigate("service")
    }, s)), /*#__PURE__*/React.createElement("span", {
      className: "hdr__link",
      onClick: () => navigate("home")
    }, "\u0411\u043B\u043E\u0433"), /*#__PURE__*/React.createElement("span", {
      className: "hdr__link",
      onClick: () => navigate("contacts")
    }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B")), /*#__PURE__*/React.createElement("div", {
      className: "hdr__spacer"
    }), /*#__PURE__*/React.createElement("div", {
      className: "hdr__actions"
    }, /*#__PURE__*/React.createElement("span", {
      className: "hdr__phone"
    }, "+7 495 234-38-44"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm",
      onClick: () => navigate("contacts")
    }, "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443"), /*#__PURE__*/React.createElement("button", {
      className: "hdr__burger gsl-iconbtn gsl-iconbtn--ghost",
      style: {
        width: 42,
        height: 42,
        border: "1px solid var(--border-default)",
        borderRadius: "var(--radius-md)",
        background: "transparent",
        color: "var(--text-strong)",
        alignItems: "center",
        justifyContent: "center"
      },
      "aria-label": "\u041C\u0435\u043D\u044E"
    }, /*#__PURE__*/React.createElement(I.Menu, {
      width: 20,
      height: 20
    })))));
  }
  window.GSLHeader = Header;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomePage.jsx
try { (() => {
// GSL Audit website — Home page
(function () {
  const React = window.React;
  const NS = window.GSLAuditDesignSystem_166977;
  const {
    Button,
    ServiceCard,
    Tag,
    Card,
    Avatar,
    Badge
  } = NS;
  const I = window.GSLIcons;
  const {
    services,
    categories,
    stats,
    testimonials
  } = window.GSLData;
  function HomePage({
    navigate
  }) {
    const [filter, setFilter] = React.useState("Все услуги");
    const shown = filter === "Все услуги" ? services : services.filter(s => s.cat === filter);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      className: "hero"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container hero__grid"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "gsl-eyebrow hero__eyebrow"
    }, /*#__PURE__*/React.createElement(I.ShieldCheck, {
      width: 15,
      height: 15
    }), " \u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0441\u043A\u043E-\u043A\u043E\u043D\u0441\u0430\u043B\u0442\u0438\u043D\u0433\u043E\u0432\u0430\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F"), /*#__PURE__*/React.createElement("h1", null, "\u0424\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u0430\u044F \u044F\u0441\u043D\u043E\u0441\u0442\u044C \u0434\u043B\u044F\xA0\u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u0438\xA0\u0447\u0430\u0441\u0442\u043D\u043E\u0433\u043E \u043A\u0430\u043F\u0438\u0442\u0430\u043B\u0430"), /*#__PURE__*/React.createElement("p", {
      className: "hero__lead"
    }, "\u0410\u0443\u0434\u0438\u0442, \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0438\u044F, \u043D\u0430\u043B\u043E\u0433\u0438 \u0438 \u043F\u0440\u0430\u0432\u043E \u2014 \u0432\u043A\u043B\u044E\u0447\u0430\u044F \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B: \u041C\u0421\u0424\u041E, \u041A\u0418\u041A \u0438\xA0\u0437\u0430\u0440\u0443\u0431\u0435\u0436\u043D\u044B\u0435 \u0441\u0447\u0435\u0442\u0430."), /*#__PURE__*/React.createElement("div", {
      className: "hero__cta"
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      onClick: () => navigate("contacts"),
      iconRight: /*#__PURE__*/React.createElement(I.ArrowRight, {
        width: 18,
        height: 18
      })
    }, "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "lg",
      onClick: () => navigate("service")
    }, "\u0412\u0441\u0435 \u0443\u0441\u043B\u0443\u0433\u0438"))), /*#__PURE__*/React.createElement("div", {
      className: "hero__panel"
    }, /*#__PURE__*/React.createElement(Card, {
      padding: "lg",
      style: {
        borderRadius: "var(--radius-2xl)",
        boxShadow: "var(--shadow-lg)",
        position: "relative",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logos/gsl-mark-sage.svg",
      alt: "",
      "aria-hidden": "true",
      style: {
        position: "absolute",
        right: -40,
        bottom: -50,
        width: 220,
        opacity: 0.12
      }
    }), /*#__PURE__*/React.createElement(Badge, {
      tone: "accent"
    }, "\u0427\u0442\u043E \u043C\u044B \u0437\u0430\u043A\u0440\u044B\u0432\u0430\u0435\u043C"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 14,
        marginTop: "var(--space-5)",
        position: "relative"
      }
    }, [{
      ic: "ShieldCheck",
      t: "Аудит по РСБУ и МСФО",
      d: "Без замечаний контролирующих органов"
    }, {
      ic: "Globe",
      t: "Международные вопросы",
      d: "КИК, зарубежные счета, резидентство"
    }, {
      ic: "Scale",
      t: "Юридическая защита",
      d: "Сделки, проверки, структурирование"
    }].map(r => {
      const Ic = I[r.ic];
      return /*#__PURE__*/React.createElement("div", {
        key: r.t,
        style: {
          display: "flex",
          gap: 14,
          alignItems: "flex-start"
        }
      }, /*#__PURE__*/React.createElement("span", {
        className: "feature__ic",
        style: {
          flex: "none"
        }
      }, /*#__PURE__*/React.createElement(Ic, {
        width: 20,
        height: 20
      })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        style: {
          fontWeight: "var(--fw-semibold)",
          color: "var(--text-strong)",
          fontSize: "var(--fs-body)"
        }
      }, r.t), /*#__PURE__*/React.createElement("div", {
        style: {
          color: "var(--text-muted)",
          fontSize: "var(--fs-small)"
        }
      }, r.d)));
    })))))), /*#__PURE__*/React.createElement("section", {
      className: "container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stats",
      style: {
        borderTop: "1px solid var(--divider)",
        borderBottom: "1px solid var(--divider)",
        padding: "var(--space-12) 0"
      }
    }, stats.map(s => /*#__PURE__*/React.createElement("div", {
      key: s.label
    }, /*#__PURE__*/React.createElement("div", {
      className: "stat__v gsl-tnum"
    }, s.value), /*#__PURE__*/React.createElement("div", {
      className: "stat__l"
    }, s.label))))), /*#__PURE__*/React.createElement("section", {
      className: "section container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sec-head"
    }, /*#__PURE__*/React.createElement("span", {
      className: "gsl-eyebrow"
    }, "\u0423\u0441\u043B\u0443\u0433\u0438"), /*#__PURE__*/React.createElement("h2", null, "\u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u0438\u0437 20+ \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0439"), /*#__PURE__*/React.createElement("p", null, "\u041E\u0442 \u0440\u0430\u0437\u043E\u0432\u043E\u0433\u043E \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0434\u043E \u043F\u043E\u043B\u043D\u043E\u0433\u043E \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u044F. \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0438\u043B\u0438 \u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0437\u0430\u044F\u0432\u043A\u0443 \u2014 \u043F\u043E\u0434\u0431\u0435\u0440\u0451\u043C \u0440\u0435\u0448\u0435\u043D\u0438\u0435.")), /*#__PURE__*/React.createElement("div", {
      className: "filters"
    }, categories.map(c => /*#__PURE__*/React.createElement(Tag, {
      key: c,
      selected: filter === c,
      onClick: () => setFilter(c)
    }, c))), /*#__PURE__*/React.createElement("div", {
      className: "grid-3"
    }, shown.map(s => {
      const Ic = I[s.icon];
      return /*#__PURE__*/React.createElement(ServiceCard, {
        key: s.id,
        icon: /*#__PURE__*/React.createElement(Ic, {
          width: 24,
          height: 24
        }),
        title: s.title,
        description: s.desc,
        meta: s.price,
        onClick: e => {
          e.preventDefault();
          navigate("service");
        }
      });
    }))), /*#__PURE__*/React.createElement("section", {
      className: "section--tight",
      style: {
        background: "var(--surface-card)",
        borderTop: "1px solid var(--divider)",
        borderBottom: "1px solid var(--divider)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "container feature"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "gsl-eyebrow"
    }, "\u041F\u043E\u0447\u0435\u043C\u0443 GSL"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: "var(--fs-h3)",
        letterSpacing: "var(--ls-tight)",
        marginTop: "var(--space-4)"
      }
    }, "\u042D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430 \u0443\u0440\u043E\u0432\u043D\u044F Big-4 \u2014 \u0441 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435\u043C \u0447\u0430\u0441\u0442\u043D\u043E\u0433\u043E \u0431\u0443\u0442\u0438\u043A\u0430"), /*#__PURE__*/React.createElement("div", {
      className: "feature__list"
    }, [{
      ic: "Users",
      t: "Команда практиков",
      d: "Аудиторы, налоговые юристы и бухгалтеры с международным опытом."
    }, {
      ic: "Globe",
      t: "40 юрисдикций",
      d: "Сопровождаем активы и компании в России и за рубежом."
    }, {
      ic: "Clock",
      t: "Предсказуемые сроки",
      d: "Фиксируем этапы и дедлайны в договоре."
    }].map(f => {
      const Ic = I[f.ic];
      return /*#__PURE__*/React.createElement("div", {
        key: f.t,
        className: "feature__item"
      }, /*#__PURE__*/React.createElement("span", {
        className: "feature__ic"
      }, /*#__PURE__*/React.createElement(Ic, {
        width: 20,
        height: 20
      })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        style: {
          fontWeight: "var(--fw-semibold)",
          color: "var(--text-strong)",
          fontSize: "var(--fs-body-lg)"
        }
      }, f.t), /*#__PURE__*/React.createElement("div", {
        style: {
          color: "var(--text-muted)",
          marginTop: 2
        }
      }, f.d)));
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-5)"
      }
    }, testimonials.map(t => /*#__PURE__*/React.createElement(Card, {
      key: t.name,
      padding: "lg",
      style: {
        background: "var(--bg-page)"
      }
    }, /*#__PURE__*/React.createElement(I.Quote, {
      width: 26,
      height: 26,
      style: {
        color: "var(--green-300)"
      }
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: "var(--fs-body-lg)",
        lineHeight: "var(--lh-relaxed)",
        color: "var(--text-strong)",
        margin: "var(--space-3) 0 var(--space-5)"
      }
    }, "\xAB", t.quote, "\xBB"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: t.name
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: "var(--fw-semibold)",
        color: "var(--text-strong)",
        fontSize: "var(--fs-small)"
      }
    }, t.name), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "var(--text-muted)",
        fontSize: "var(--fs-caption)"
      }
    }, t.role)))))))), /*#__PURE__*/React.createElement("section", {
      className: "section container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "cta-band"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "\u041E\u0431\u0441\u0443\u0434\u0438\u043C \u0432\u0430\u0448\u0443 \u0437\u0430\u0434\u0430\u0447\u0443?"), /*#__PURE__*/React.createElement("p", null, "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0430\u044F \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F: \u043E\u0446\u0435\u043D\u0438\u043C \u043E\u0431\u044A\u0451\u043C, \u0441\u0440\u043E\u043A\u0438 \u0438 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u0440\u0430\u0431\u043E\u0447\u0435\u0433\u043E \u0434\u043D\u044F.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "var(--space-3)",
        justifyContent: "flex-end",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "inverse",
      size: "lg",
      onClick: () => navigate("contacts")
    }, "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "lg",
      style: {
        color: "#fff"
      },
      iconRight: /*#__PURE__*/React.createElement(I.Phone, {
        width: 17,
        height: 17
      })
    }, "\u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C")))));
  }
  window.GSLHomePage = HomePage;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Icons.jsx
try { (() => {
// GSL Audit — icon set (Lucide, MIT-licensed paths) as lightweight React components.
// Consistent 24px grid, 1.8 stroke, round caps. Add to window for cross-file use.
(function () {
  const React = window.React;
  const S = (paths, props = {}) => React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, props), paths.map((d, i) => React.createElement("path", {
    key: i,
    d
  })));
  const Icons = {
    ShieldCheck: p => S(["M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", "m9 12 2 2 4-4"], p),
    Calculator: p => S(["M4 3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z", "M8 6h8M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14v4M8 18h4"], p),
    Receipt: p => S(["M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z", "M8 7h8M8 11h8M8 15h5"], p),
    Scale: p => S(["m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z", "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z", "M7 21h10M12 3v18M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"], p),
    Globe: p => S(["M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z", "M2 12h20", "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z"], p),
    Briefcase: p => S(["M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", "M4 7h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z"], p),
    Building: p => S(["M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2M10 6h4M10 10h4M10 14h4M10 18h4"], p),
    FileText: p => S(["M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z", "M14 2v6h6M9 13h6M9 17h4"], p),
    TrendingUp: p => S(["M16 7h6v6", "m22 7-8.5 8.5-5-5L2 17"], p),
    Users: p => S(["M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"], p),
    Phone: p => S(["M13.83 19.72A16 16 0 0 1 4.28 10.17 6.5 6.5 0 0 1 4.1 4.18 2 2 0 0 1 6.1 3h3a2 2 0 0 1 2 1.72c.13 1 .35 1.95.66 2.87a2 2 0 0 1-.45 2.11L9.1 11.91a16 16 0 0 0 3 3l1.21-1.21a2 2 0 0 1 2.11-.45c.92.3 1.88.53 2.87.66A2 2 0 0 1 21 16v3a2 2 0 0 1-2.18 2 16 16 0 0 1-4.99-1.28Z"], p),
    Mail: p => S(["M22 6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z", "m22 7-10 6L2 7"], p),
    MapPin: p => S(["M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", "M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"], p),
    ArrowRight: p => S(["M5 12h14M13 6l6 6-6 6"], p),
    ArrowUpRight: p => S(["M7 7h10v10", "M7 17 17 7"], p),
    Check: p => S(["M20 6 9 17l-5-5"], p),
    Menu: p => S(["M4 6h16M4 12h16M4 18h16"], p),
    Clock: p => S(["M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z", "M12 6v6l4 2"], p),
    Star: p => S(["M11.5 2.6a.5.5 0 0 1 .9 0l2.6 5.3 5.8.8a.5.5 0 0 1 .3.9l-4.2 4.1 1 5.8a.5.5 0 0 1-.7.5L12 17.3l-5.2 2.7a.5.5 0 0 1-.7-.5l1-5.8L2.9 9.6a.5.5 0 0 1 .3-.9l5.8-.8z"], p),
    Quote: p => S(["M3 21c3 0 7-1 7-8V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2c0 3-1 4-3 4zM14 21c3 0 7-1 7-8V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2c0 3-1 4-3 4z"], p)
  };
  window.GSLIcons = Icons;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServicePage.jsx
try { (() => {
// GSL Audit website — Service detail page
(function () {
  const React = window.React;
  const NS = window.GSLAuditDesignSystem_166977;
  const {
    Button,
    Card,
    Badge,
    Accordion,
    Alert
  } = NS;
  const I = window.GSLIcons;
  const faq = [{
    q: "Сколько длится аудит?",
    a: "От 5 до 20 рабочих дней в зависимости от объёма операций и качества учёта. Точный график фиксируем в договоре."
  }, {
    q: "Что входит в стоимость?",
    a: "Планирование, аудиторские процедуры, письменный отчёт и сопровождение при защите результатов перед собственниками или банком."
  }, {
    q: "Работаете ли вы с МСФО?",
    a: "Да. Готовим и трансформируем отчётность по МСФО, в том числе для групп компаний и иностранных холдингов."
  }];
  function ServicePage({
    navigate
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement("nav", {
      className: "crumb"
    }, /*#__PURE__*/React.createElement("a", {
      onClick: () => navigate("home")
    }, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F"), /*#__PURE__*/React.createElement(I.ArrowRight, {
      width: 13,
      height: 13
    }), /*#__PURE__*/React.createElement("a", {
      onClick: () => navigate("home")
    }, "\u0410\u0443\u0434\u0438\u0442"), /*#__PURE__*/React.createElement(I.ArrowRight, {
      width: 13,
      height: 13
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-strong)"
      }
    }, "\u0410\u0443\u0434\u0438\u0442 \u043F\u043E \u0420\u0421\u0411\u0423"))), /*#__PURE__*/React.createElement("section", {
      className: "container",
      style: {
        paddingBottom: "var(--space-12)"
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "accent"
    }, "\u0410\u0443\u0434\u0438\u0442"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: "var(--fs-h1)",
        letterSpacing: "var(--ls-tight)",
        lineHeight: 1.1,
        margin: "var(--space-4) 0 var(--space-5)",
        maxWidth: "18ch"
      }
    }, "\u0410\u0443\u0434\u0438\u0442 \u043F\u043E \u0420\u0421\u0411\u0423"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--fs-lead)",
        color: "var(--text-muted)",
        maxWidth: "60ch",
        lineHeight: "var(--lh-relaxed)"
      }
    }, "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0438 \u0438\u043D\u0438\u0446\u0438\u0430\u0442\u0438\u0432\u043D\u044B\u0439 \u0430\u0443\u0434\u0438\u0442 \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0441\u043A\u043E\u0439 \u043E\u0442\u0447\u0451\u0442\u043D\u043E\u0441\u0442\u0438 \u0441 \u043F\u043E\u043D\u044F\u0442\u043D\u044B\u043C \u043E\u0442\u0447\u0451\u0442\u043E\u043C \u0438 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u044F\u043C\u0438 \u043F\u043E \u0441\u043D\u0438\u0436\u0435\u043D\u0438\u044E \u0440\u0438\u0441\u043A\u043E\u0432.")), /*#__PURE__*/React.createElement("section", {
      className: "section--tight container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "article"
    }, /*#__PURE__*/React.createElement("div", {
      className: "prose"
    }, /*#__PURE__*/React.createElement("p", null, "\u041C\u044B \u043F\u0440\u043E\u0432\u043E\u0434\u0438\u043C \u0430\u0443\u0434\u0438\u0442 \u0442\u0430\u043A, \u0447\u0442\u043E\u0431\u044B \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0431\u044B\u043B \u043F\u043E\u043B\u0435\u0437\u0435\u043D \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440\u0443, \u043D\u043E \u0438 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u0438\u043A\u0443: \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u043C \u0437\u043E\u043D\u044B \u0440\u0438\u0441\u043A\u0430, \u043E\u0446\u0435\u043D\u0438\u0432\u0430\u0435\u043C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u0443\u0447\u0451\u0442\u0430 \u0438 \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u044B\u0435 \u0448\u0430\u0433\u0438."), /*#__PURE__*/React.createElement("h2", null, "\u0427\u0442\u043E \u0432\u0445\u043E\u0434\u0438\u0442 \u0432 \u0440\u0430\u0431\u043E\u0442\u0443"), /*#__PURE__*/React.createElement("ul", null, ["Оценка системы внутреннего контроля", "Проверка участков учёта и налоговых рисков", "Аудиторское заключение и письменный отчёт", "Сопровождение при защите результатов"].map(t => /*#__PURE__*/React.createElement("li", {
      key: t
    }, /*#__PURE__*/React.createElement(I.Check, {
      width: 20,
      height: 20
    }), /*#__PURE__*/React.createElement("span", null, t)))), /*#__PURE__*/React.createElement("h2", null, "\u041A\u0430\u043A \u043C\u044B \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C"), /*#__PURE__*/React.createElement("p", null, "\u0417\u0430\u043A\u0440\u0435\u043F\u043B\u044F\u0435\u043C \u0437\u0430 \u0432\u0430\u043C\u0438 \u043A\u043E\u043C\u0430\u043D\u0434\u0443 \u0438 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u0430, \u0444\u0438\u043A\u0441\u0438\u0440\u0443\u0435\u043C \u044D\u0442\u0430\u043F\u044B \u0438 \u0441\u0440\u043E\u043A\u0438 \u0432 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0435. \u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u043F\u0435\u0440\u0435\u0434\u0430\u044E\u0442\u0441\u044F \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u0449\u0438\u0449\u0451\u043D\u043D\u044B\u0439 \u043A\u0430\u043D\u0430\u043B \u2014 \u0431\u0435\u0437 \u0431\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u043E\u0439 \u043F\u0435\u0440\u0435\u043F\u0438\u0441\u043A\u0438."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "var(--space-6)"
      }
    }, /*#__PURE__*/React.createElement(Alert, {
      tone: "accent",
      title: "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0430\u044F \u043E\u0446\u0435\u043D\u043A\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u0430"
    }, "\u041F\u0440\u0438\u0448\u043B\u0438\u0442\u0435 \u043E\u0431\u043E\u0440\u043E\u0442\u043D\u043E-\u0441\u0430\u043B\u044C\u0434\u043E\u0432\u0443\u044E \u0432\u0435\u0434\u043E\u043C\u043E\u0441\u0442\u044C \u2014 \u0432\u0435\u0440\u043D\u0451\u043C\u0441\u044F \u0441 \u043E\u0431\u044A\u0451\u043C\u043E\u043C, \u0441\u0440\u043E\u043A\u0430\u043C\u0438 \u0438 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C\u044E.")), /*#__PURE__*/React.createElement("h2", null, "\u0427\u0430\u0441\u0442\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B"), /*#__PURE__*/React.createElement(Accordion, {
      items: faq,
      defaultOpen: [0]
    })), /*#__PURE__*/React.createElement("aside", null, /*#__PURE__*/React.createElement(Card, {
      className: "sticky-card",
      padding: "lg",
      style: {
        boxShadow: "var(--shadow-md)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "var(--fs-small)",
        color: "var(--text-muted)"
      }
    }, "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: "var(--fs-h3)",
        fontWeight: "var(--fw-semibold)",
        color: "var(--text-strong)",
        margin: "4px 0 var(--space-2)"
      }
    }, "\u043E\u0442 80 000 \u20BD"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 10,
        margin: "var(--space-5) 0",
        paddingTop: "var(--space-5)",
        borderTop: "1px solid var(--divider)"
      }
    }, [["Срок", "от 5 дней"], ["Формат", "очно / онлайн"], ["Отчёт", "РСБУ + рекомендации"]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: "var(--fs-small)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-muted)"
      }
    }, k), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-strong)",
        fontWeight: "var(--fw-semibold)"
      }
    }, v)))), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      fullWidth: true,
      size: "lg",
      onClick: () => navigate("contacts")
    }, "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      fullWidth: true,
      style: {
        marginTop: 10
      },
      iconRight: /*#__PURE__*/React.createElement(I.Phone, {
        width: 16,
        height: 16
      })
    }, "+7 495 234-38-44"))))));
  }
  window.GSLServicePage = ServicePage;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServicePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
// GSL Audit — sample site content (services catalog, nav, testimonials).
(function () {
  const services = [{
    id: "audit-rsbu",
    icon: "ShieldCheck",
    cat: "Аудит",
    title: "Аудит по РСБУ",
    desc: "Обязательный и инициативный аудит бухгалтерской отчётности.",
    price: "от 80 000 ₽"
  }, {
    id: "audit-ifrs",
    icon: "TrendingUp",
    cat: "Аудит",
    title: "Отчётность по МСФО",
    desc: "Подготовка и трансформация отчётности по международным стандартам.",
    price: "от 150 000 ₽"
  }, {
    id: "accounting",
    icon: "Calculator",
    cat: "Бухгалтерия",
    title: "Бухгалтерское сопровождение",
    desc: "Полный или частичный аутсорсинг учёта под ключ.",
    price: "от 25 000 ₽ / мес"
  }, {
    id: "payroll",
    icon: "Users",
    cat: "Бухгалтерия",
    title: "Расчёт зарплаты и кадры",
    desc: "Зарплата, кадровый учёт и отчётность в фонды.",
    price: "от 15 000 ₽ / мес"
  }, {
    id: "tax-consult",
    icon: "Receipt",
    cat: "Налоги",
    title: "Налоговый консалтинг",
    desc: "Оптимизация нагрузки и сопровождение проверок.",
    price: "от 12 000 ₽ / час"
  }, {
    id: "tax-resident",
    icon: "Globe",
    cat: "Налоги",
    title: "Налоговое резидентство",
    desc: "Сопровождение смены и подтверждения статуса.",
    price: "по запросу"
  }, {
    id: "cfc",
    icon: "Building",
    cat: "Международное",
    title: "КИК и зарубежные счета",
    desc: "Уведомления о КИК, отчётность по зарубежным счетам.",
    price: "от 40 000 ₽"
  }, {
    id: "company-foreign",
    icon: "Briefcase",
    cat: "Международное",
    title: "Регистрация компаний за рубежом",
    desc: "Открытие и сопровождение иностранных компаний.",
    price: "по запросу"
  }, {
    id: "legal",
    icon: "Scale",
    cat: "Право",
    title: "Юридическое сопровождение",
    desc: "Договорная работа, сделки, корпоративное право.",
    price: "от 10 000 ₽ / час"
  }, {
    id: "due-diligence",
    icon: "FileText",
    cat: "Право",
    title: "Due Diligence",
    desc: "Правовая и финансовая проверка перед сделкой.",
    price: "по запросу"
  }, {
    id: "private",
    icon: "Users",
    cat: "Частным лицам",
    title: "Декларирование доходов",
    desc: "3-НДФЛ, вычеты и доходы от зарубежных активов.",
    price: "от 6 000 ₽"
  }, {
    id: "trust",
    icon: "ShieldCheck",
    cat: "Частным лицам",
    title: "Защита активов",
    desc: "Структурирование личного капитала и наследование.",
    price: "по запросу"
  }];
  const categories = ["Все услуги", "Аудит", "Бухгалтерия", "Налоги", "Международное", "Право", "Частным лицам"];
  const stats = [{
    value: "25+",
    label: "лет на рынке"
  }, {
    value: "3 800",
    label: "проектов в год"
  }, {
    value: "40",
    label: "юрисдикций"
  }, {
    value: "98%",
    label: "клиентов остаются"
  }];
  const testimonials = [{
    quote: "GSL выстроили нам отчётность по МСФО и сопроводили аудит без единого замечания. Работают как часы.",
    name: "Дмитрий Лавров",
    role: "Финансовый директор, производственный холдинг"
  }, {
    quote: "Помогли разобраться с уведомлениями о КИК и зарубежных счетах. Объясняют сложное простым языком.",
    name: "Екатерина Соколова",
    role: "Частный клиент"
  }];
  const navServices = ["Аудит", "Бухгалтерия", "Налоги", "Право", "Международное"];
  window.GSLData = {
    services,
    categories,
    stats,
    testimonials,
    navServices
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

})();
