import React, { useEffect, useState } from "react";

export default function BetsTable() {
  const [bets, setBets] = useState([]);

  useEffect(() => {
    fetch("/api/bets")
      .then(res => res.json())
      .then(data => setBets(data));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>User</th>
          <th>Bet Type</th>
          <th>Bet Value</th>
          <th>Amount</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {bets.map(bet => (
          <tr key={bet.id}>
            <td>{bet.user}</td>
            <td>{bet.type}</td>
            <td>{bet.value}</td>
            <td>{bet.amount}</td>
            <td>{new Date(bet.time).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}