import Image from 'next/image'

function HeroImage() {
  return (
      <Image
        src="/images/ai-course.jpg"
        alt="AI Course Photo"
        fill
        className="object-cover blur-xs"
      />
  )
}

export default HeroImage
