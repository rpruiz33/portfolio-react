import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const dataCommunication = [
  { name: "Persuasión", value: 34 },
  { name: "Escucha", value: 33 },
  { name: "Claridad", value: 33 },
];

const dataCollaboration = [
  { name: "Adaptabilidad", value: 40 },
  { name: "Resolución", value: 30 },
  { name: "Sinergia", value: 30 },
];

const dataLeadership = [
  { name: "Visión", value: 45 },
  { name: "Empoderamiento", value: 30 },
  { name: "Resiliencia", value: 25 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function SoftSkillsCharts() {
  return (
    <div className="app-container">
      <h2 className="title">Soft Skills</h2>
      <div className="charts-grid">
        
        {/* Comunicación */}
        <div className="chart-wrapper">
          <h3>Comunicación</h3>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={dataCommunication}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  innerRadius={40}
                  paddingAngle={2}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  labelLine={true}
                >
                  {dataCommunication.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, ""]} />
                <Legend 
                  layout="horizontal" 
                  verticalAlign="bottom" 
                  align="center"
                  wrapperStyle={{ paddingTop: '20px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Colaboración */}
        <div className="chart-wrapper">
          <h3>Colaboración</h3>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={dataCollaboration}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  innerRadius={40}
                  paddingAngle={2}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  labelLine={true}
                >
                  {dataCollaboration.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, ""]} />
                <Legend 
                  layout="horizontal" 
                  verticalAlign="bottom" 
                  align="center"
                  wrapperStyle={{ paddingTop: '20px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Liderazgo */}
        <div className="chart-wrapper">
          <h3>Liderazgo</h3>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={dataLeadership}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  innerRadius={40}
                  paddingAngle={2}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  labelLine={true}
                >
                  {dataLeadership.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, ""]} />
                <Legend 
                  layout="horizontal" 
                  verticalAlign="bottom" 
                  align="center"
                  wrapperStyle={{ paddingTop: '20px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

      <style jsx>{`
        .app-container {
          width: 100%;
          min-height: 100vh;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-sizing: border-box;
        }
        
        .title {
          margin: 0 0 20px 0;
          text-align: center;
          font-size: clamp(1.5rem, 3vw, 2rem);
          color: white;
        }
        
        .charts-grid {
          width: 100%;
          max-width: 1200px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          justify-items: center;
        }
        
        .chart-wrapper {
          width: 100%;
          max-width: 400px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .chart-wrapper h3 {
          margin: 0 0 10px 0;
          font-size: 1.2rem;
          text-align: center;
          color: rgba(94, 87, 87, 0.8);
        }
        
        .chart-container {
          width: 100%;
          height: 350px;
          min-height: 350px;
        }
        
        @media (max-width: 768px) {
          .charts-grid {
            grid-template-columns: 1fr;
          }
          
          .chart-container {
            height: 300px;
          }
        }
        
        @media (max-width: 480px) {
          .chart-container {
            height: 280px;
          }
        }
      `}</style>
    </div>
  );
}