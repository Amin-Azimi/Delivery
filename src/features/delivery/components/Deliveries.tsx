import { useFetchDeliveriesQuery } from "../services/delivery.api";
import { Link } from "react-router-dom";

export default function Deliveries() {
  const { data = [], isFetching } = useFetchDeliveriesQuery();

  return (
    <div>
      {isFetching ? (
        <h1>loading....</h1>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Customer</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>
                  <Link to={"/delivery/" + item.id}>{item.id}</Link>
                </td>
                <td>
                  <Link to={"/delivery/" + item.id}>{item.customer}</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

    </div>
  );
}
