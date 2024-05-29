function Productcard({title,price,rating,image})
{

    const s = {
        fontSize: '2px',
        position: 'fixed',
        bottom: '20px', 
        right: '20px', 
        background: 'lightgray',
        padding: '10px',
        borderRadius: '5px',
      };
    return(
        <>
        <div className="card">
            <img src={image}/>
            <p>{title}</p>
            <p>${price}</p>
        </div>
        <div style={s}>
            <p>background color change</p>
            <input type='color' onChange={
                (e)=>{
                    document.body.style.background=e.target.value

                }
            }></input>
        </div>
        </>
    )
}
export default Productcard;