import { useState } from 'react'

export function HalomotButton({
  inscription,
  onClick,
  fixedWidth,
  fillWidth = false,
  gradient = 'linear-gradient(to right, #a123f4, #603dec)',
  backgroundColor = '#111014',
  textColor = '#fff',
  innerBorderRadius = '6px',
  outerBorderRadius = '6.34px',
  hoverTextColor,
  href,
}) {
  const [isHovered, setIsHovered] = useState(false)

  const outerStyle = {
    display: 'inline-block',
    background: gradient,
    borderRadius: outerBorderRadius,
    padding: '1.5px',
    width: fillWidth ? '100%' : fixedWidth || 'auto',
    flexGrow: fillWidth ? 1 : 0,
    cursor: 'pointer',
    transition: 'filter 0.2s ease-in-out',
    filter: isHovered ? 'brightness(1.2)' : 'brightness(1)',
    border: 'none',
    textAlign: 'center',
  }

  const innerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: backgroundColor,
    borderRadius: innerBorderRadius,
    padding: '10px 20px',
    color: isHovered && hoverTextColor ? hoverTextColor : textColor,
    fontSize: '14px',
    fontWeight: 500,
    letterSpacing: '0.02em',
    transition: 'color 0.2s ease-in-out',
    whiteSpace: 'nowrap',
    width: '100%',
    pointerEvents: 'none',
  }

  const handleClick = (e) => {
    e.stopPropagation()
    if (href) {
      window.open(href, '_blank', 'noopener,noreferrer')
    } else if (onClick) {
      onClick()
    }
  }

  return (
    <button
      type="button"
      style={outerStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div style={innerStyle}>
        {inscription}
      </div>
    </button>
  )
}
