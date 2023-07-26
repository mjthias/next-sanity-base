import SanityImage from '../SanityImage'

export default function Hero({ data }: any) {
  return (
    <section>
      <h1>{data?.title}</h1>
      <p>{data?.tagline}</p>
      <SanityImage
        imageObj={data?.image}
        heightRatio={9 / 16}
        width={500}
        sizes={'(max-width: 1100px) 76vw, 1100px'}
      />
    </section>
  )
}
