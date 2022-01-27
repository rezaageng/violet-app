import { useParams } from "react-router-dom"
export default function BlogDetail() {
  const urlParams = useParams()

  return (
    <>
      <p>This is {urlParams.slug}</p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
        placeat eligendi dolorem harum est, esse illum consectetur corrupti
        tempore asperiores perferendis ad molestiae ut quis impedit omnis
        tenetur ratione earum!
      </p>
    </>
  )
}
