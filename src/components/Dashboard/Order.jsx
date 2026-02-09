import React from "react";

const Order = () => {
  const orders = [
    {
      id: "ORD-1001",
      customer: "John Doe",
      status: "Pending",
      date: "2026-02-05",
      amount: "$120.00",
    },
    {
      id: "ORD-1002",
      customer: "Sarah Ahmed",
      status: "Completed",
      date: "2026-02-04",
      amount: "$340.00",
    },
    {
      id: "ORD-1003",
      customer: "Rahim Uddin",
      status: "Cancelled",
      date: "2026-02-03",
      amount: "$75.00",
    },
    {
      id: "ORD-1004",
      customer: "Emily Watson",
      status: "Shipped",
      date: "2026-02-02",
      amount: "$210.00",
    },
  ];

  const statusBadge = (status) => {
    switch (status) {
      case "Completed":
        return "badge-success";
      case "Pending":
        return "badge-warning";
      case "Cancelled":
        return "badge-error";
      case "Shipped":
        return "badge-info";
      default:
        return "badge-ghost";
    }
  };

  return (
    <div className="overflow-x-auto mt-6">
      <table className="table w-full border border-blue-600">
        <thead className="text-black">
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Status</th>
            <th>Date</th>
            <th className="text-right">Amount</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="hover">
              <td className="font-medium">{order.id}</td>
              <td>{order.customer}</td>
              <td>
                <span className={`badge ${statusBadge(order.status)}`}>
                  {order.status}
                </span>
              </td>
              <td>{order.date}</td>
              <td className="text-right font-semibold">{order.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Order;
