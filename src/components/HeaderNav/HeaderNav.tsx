import { useState } from 'react'
import './HeaderNav.css'

const sections = [
  {
    id: 'sobre',
    label: 'Sobre',
  },
  {
    id: 'projetos',
    label: 'Projetos',
  },
  {
    id: 'curriculo',
    label: 'Currículo',
  },
]

function HeaderNav() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const handleNavigation = (id: string) => {
    setActiveSection(id)

    const section = document.getElementById(id)

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }

  return (
    <header className="header">

      <div className="header__logo">
        JS
      </div>

      <nav className="header__nav">

        {sections.map((section, index) => (
          <button
            key={section.id}
            className={`header__link header__link--${index} ${
              activeSection === section.id
                ? 'header__link--active'
                : ''
            }`}
            onClick={() => handleNavigation(section.id)}
          >
            {section.label}
          </button>
        ))}

      </nav>

    </header>
  )
}

export default HeaderNav