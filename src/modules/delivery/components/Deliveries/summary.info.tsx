import { Link } from "react-router-dom";
import DeliveryModel from "../../models/delivery.model";

function SummaryInfo({id,customer} : Partial<DeliveryModel>) {
    return(
        <tr key={id}>
        <td>
          <Link to={"/delivery/" + id}>{id}</Link>
        </td>
        <td>
          <Link to={"/delivery/" + id}>{customer}</Link>
        </td>
      </tr>

    )
}

export default SummaryInfo;