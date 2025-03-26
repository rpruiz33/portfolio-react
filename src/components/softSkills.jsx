import React from 'react';
import { BarChart,Cell, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Mismos colores que en hard skills
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const SoftSkillsCharts = () => {
  // Datos para los gráficos
  const skillsData = [
    {
      title: "Comunicación",
      data: [
        { name: "Persuasión", value: 35 },
        { name: "Escucha Activa", value: 40 },
        { name: "Claridad", value: 38 }
      ]
    },
    {
      title: "Colaboración",
      data: [
        { name: "Adaptabilidad", value: 42 },
        { name: "Resolución", value: 36 },
        { name: "Sinergia", value: 39 }
      ]
    },
    {
      title: "Liderazgo",
      data: [
        { name: "Visión", value: 45 },
        { name: "Empoderamiento", value: 35 },
        { name: "Resiliencia", value: 37 }
      ]
    }
  ];

  return (
    <div style={{
      width: '100%',
      padding: '30px',
      backgroundColor:  'rgba(188, 182, 182, 0.1)', // Fondo gris claro
      borderRadius: '12px',
      marginTop: '40px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{
        textAlign: 'center',
        marginBottom: '30px',
        color:'rgba(255, 255, 255, 0.8)',
        fontSize: '28px',
        fontWeight: '600'
      }}>
        Mis Soft Skills
      </h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '30px',
        justifyContent: 'center'
      }}>
        {skillsData.map((skill, index) => (
          <div key={index} style={{
            backgroundColor: 'rgba(188, 182, 182, 0.1)',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
          }}>
            <h3 style={{
              textAlign: 'center',
              marginBottom: '20px',
              color: '#495057',
              fontSize: '20px'
            }}>
              {skill.title}
            </h3>
            <div style={{ height: '250px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={skill.data}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <XAxis type="number" domain={[0, 50]} />
                  <YAxis 
                    type="category" 
                    dataKey="name" 
                    width={100}
                    tick={{ fontSize: 14 }}
                  />
                  <Tooltip 
                    formatter={(value) => [`${value}%`, ""]}
                    contentStyle={{
                      borderRadius: '8px',
                      padding: '10px',
                      border: 'none',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}
                  />
                  <Legend />
                  <Bar 
                    dataKey="value" 
                    name="Nivel" 
                    barSize={25}
                    label={{ position: 'right', fill: '#333', fontSize: 14 }}
                  >
                    {skill.data.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={COLORS[index % COLORS.length]} 
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoftSkillsCharts;