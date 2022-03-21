import React from 'react'
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import './piechart.css';
function Piechart({data}) {
    return (
        <div className='piechart'>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              dataKey="Active User"
              isAnimationActive={false}
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        </div>
      );
}

export default Piechart