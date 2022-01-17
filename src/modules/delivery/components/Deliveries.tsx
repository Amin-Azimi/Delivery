import { useFetchDeliveriesQuery } from "../services/delivery.api";
import { Link } from "react-router-dom";
import SummaryInfo from "./Deliveries/summary.info";

export default function Deliveries() {
  const { data = [], isFetching } = useFetchDeliveriesQuery();

  return (
    <div className="table table-data2">
      {isFetching ? (
        <div className="spinner-border" role="status"> <h1>loading....</h1></div>
        
      ) : (
        <table className="table table-data2" data-testid="delivery-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Customer</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <SummaryInfo  id={item.id} customer={item.customer} key={item.id} />
            ))}
          </tbody>
        </table>
      )}

    </div>
  );
}
