import DeliveryModel from "../../models/delivery.model";


const Detail=(model : DeliveryModel) => {
    return(
        <>
            <h2>Detaisl of delivery {model.id}</h2>
            <p>Id: {model.id}</p>
            <p>Customer: {model.customer}</p>
            <p>address: {model.address}</p>
            <p>city: {model.city}</p>
            <p>latitude: {model.latitude}</p>
            <p>longitude: {model.longitude}</p>
        </>
    );
}

export default Detail;