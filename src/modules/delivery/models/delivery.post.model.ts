import FinishStatus from "./finish.status.model";

export default interface DeliveryPost {
  deliveryId: string;
  status: FinishStatus;
  latitude: number;
  longitude: number;
}
