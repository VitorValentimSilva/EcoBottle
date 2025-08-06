interface TableTheadProps {
  th: Array<string>;
}

export default function TableThead({ th }: TableTheadProps) {
  return (
    <thead>
      <tr className="bg-gradient-to-r from-green-500 to-emerald-600">
        {th.map((item, key) => (
          <th
            key={key}
            className="px-6 py-4 text-left text-white font-semibold"
          >
            {item}
          </th>
        ))}
      </tr>
    </thead>
  );
}
