import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Configuración común
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

// Componente de gráfico reutilizable
const SkillPieChart = ({ data, title }) => (
  <div className="chart-wrapper">
    <h3>{title}</h3>
    <div className="chart-container">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={60}
            innerRadius={30}
            paddingAngle={1}
            dataKey="value"
            label={({ name }) => name}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => [`${value}%`, ""]} />
          <Legend layout="horizontal" verticalAlign="bottom" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  </div>
);

// Divisor decorativo
const SectionDivider = () => (
  <div className="section-divider">
    <div className="divider-line"></div>
    <div className="divider-icon">✨</div>
    <div className="divider-line"></div>
  </div>
);

export default function SkillsCharts() {
  return (
    <div className="app-container">
      {/* Hard Skills */}
      <h2 className="title">Hard Skills</h2>
      <div className="charts-grid">
        <SkillPieChart 
          data={[
            { name: "Java", value: 34 },
            { name: "NodeJS", value: 33 },
            { name: "PHP", value: 33 }
          ]} 
          title="Backend" 
        />
        <SkillPieChart 
          data={[
            { name: "React", value: 85 },
            { name: "Angular", value: 15 }
          ]} 
          title="Frontend" 
        />
        <SkillPieChart 
          data={[
            { name: "Bases Datos", value: 30 },
            { name: "Ing. Sw", value: 40 },
            { name: "GitHub", value: 30 }
          ]} 
          title="Otras" 
        />
      </div>

      {/* Divisor decorativo */}
      <SectionDivider />

      {/* Soft Skills */}
      <h2 className="title">Soft Skills</h2>
      <div className="charts-grid">
        <SkillPieChart 
          data={[
            { name: "Persuasión", value: 34 },
            { name: "Escucha", value: 33 },
            { name: "Claridad", value: 33 }
          ]} 
          title="Comunicación" 
        />
        <SkillPieChart 
          data={[
            { name: "Adaptabilidad", value: 40 },
            { name: "Resolución", value: 30 },
            { name: "Sinergia", value: 30 }
          ]} 
          title="Colaboración" 
        />
        <SkillPieChart 
          data={[
            { name: "Visión", value: 45 },
            { name: "Empoderamiento", value: 30 },
            { name: "Resiliencia", value: 25 }
          ]} 
          title="Liderazgo" 
        />
      </div>

      <style jsx>{`
        .app-container {
          width: 100%;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-sizing: border-box;
          font-size: 53%;
        }
        
        .title {
          margin: 0 0 15px 0;
          text-align: center;
          font-size: clamp(1.3rem, 3vw, 1.8rem);
          color: white;
        }
        
        .charts-grid {
          width: 100%;
          max-width: 1000px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 15px;
          justify-items: center;
        }
        
        .chart-wrapper {
          width: 100%;
          max-width: 280px;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 10px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        
        .chart-wrapper h3 {
          margin: 0 0 8px 0;
          font-size: 1.1rem;
          text-align: center;
          color: rgba(255, 255, 255, 0.8);
        }
        
        .chart-container {
          width: 100%;
          height: 220px;
        }
        
        .section-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 800px;
          margin: 30px 0;
        }
        
        .divider-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, #FFBB28, transparent);
        }
        
        .divider-icon {
          margin: 0 20px;
          font-size: 1.5rem;
          color: #FFBB28;
        }
        
        @media (max-width: 768px) {
          .charts-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          }
          
          .chart-container {
            height: 200px;
          }
          
          .section-divider {
            margin: 20px 0;
          }
        }
        
        @media (max-width: 480px) {
          .chart-container {
            height: 180px;
          }
          
          .divider-icon {
            margin: 0 10px;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
}