function Button({ children, onClick, variant = 'primary', className = '', ...props }) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 font-sans text-sm font-semibold transition-colors duration-200 cursor-pointer border'

  const variants = {
    primary:   'bg-accent border-accent text-white hover:bg-accent-dark hover:border-accent-dark',
    secondary: 'bg-transparent border-border text-gray-700 hover:border-accent hover:text-accent',
    ghost:     'bg-transparent border-transparent text-gray-600 hover:text-accent',
  }

  return (
    <button
      className={`${base} ${variants[variant] ?? ''} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
