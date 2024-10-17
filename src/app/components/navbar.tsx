import Link from 'next/link'

const navbar = () => {
  return (
    <div className="wrapper">
        <div className="logo">Afifa Khan</div>
        <ul>
            <li><Link href="/" className='link home'>Home</Link></li>
            <li><Link href="../about" className='link'>About</Link></li>
            <li><Link href="../skills" className='link'>Skills</Link></li>
            <li><Link href="../contact" className='link'>Contact Us</Link></li>
        </ul>
    </div>
  )
}

export default navbar