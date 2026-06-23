import { useNavigate, useLocation } from 'react-router-dom'

export function useScrollToSection() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (sectionId: string) => {
    const scroll = () => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    }

    if (pathname !== '/') {
      navigate('/')
      window.setTimeout(scroll, 100)
    } else {
      scroll()
    }
  }
}
