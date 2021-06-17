function CardImage({url}) {

    const img= url ? url : (`/boy.jpg`)
    return (
        <div>
          <img src={img} className="bg-contain bg-center rounded-md" />
      </div>
    )
}


export default CardImage
