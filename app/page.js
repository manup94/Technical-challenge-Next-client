import bg from '@/public/bg.jpg'

export default function Home() {
  return (
    <div style={{
      backgroundImage: `url(${bg.src})`,
      height: '100vh',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'

    }}>


    </div >


  )
}
