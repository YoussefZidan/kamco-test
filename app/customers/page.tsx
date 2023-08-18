import CreateCustomer from "./CreateCustomer";
import CustomerList from "./CustomerList";

export default function Customers() {
  return (
    <div className="p-5 grid gap-5 grid-cols-1">
      <CreateCustomer />

      <CustomerList />
    </div>
  );
}
