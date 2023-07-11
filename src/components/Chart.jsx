import './ChartStyle.css'

import React, { useState } from "react";
import { PieChart, Pie, Legend, Sector, Cell, ResponsiveContainer } from 'recharts';
const Chart = ({zakazivanja,vakcine}) => {
  const data = [
     
  
  ];
  function brojZakazanihPoVakcini(id){
    var brojac=0;
    for(var i=0;i<zakazivanja.length;i++){
      
        if(zakazivanja[i].vakcina.id==id){
           brojac+=1;
           
        } 
    }
    return brojac;
  }
   
  for(var i=0;i<vakcine.length;i++){
    
 
    data.push({ value:brojZakazanihPoVakcini(vakcine[i].id),name:vakcine[i].naziv_vakcine})
    
      console.log(data)
  }

  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
 
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);

      return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
              {`${(percent * 100).toFixed(0)}%`}
          </text>
      );
  };

  return (
      <>
          <div>
              <div className="row d-flex justify-content-center text-center">
                  
                  <hr />
                  <div className="col-md-8">
                      <ResponsiveContainer width={400} height={400} className="text-center">
                          <PieChart width={400} height={400}>
                              <Legend layout="vertical" verticalAlign="top" align="top" />
                              <Pie
                                  data={data}
                                  cx="50%"
                                  cy="50%"
                                  labelLine={false}
                                  label={renderCustomizedLabel}
                                  outerRadius={80}
                                  fill="#8884d8"
                                  dataKey="value"
                              >
                                  {data.map((entry, index) => (
                                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                  ))}
                              </Pie>
                          </PieChart>
                      </ResponsiveContainer>
                  </div>
              </div>
          </div>
      </>
 );
};

export default Chart;
