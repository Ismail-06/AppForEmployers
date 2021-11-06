import './app-info.css';

const AppInfo = ({countUsers, increaseUsers}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании</h1>
            <h2>Общее число сотрудников: {countUsers}</h2>
            <h2>Премию получат: {increaseUsers}</h2>
        </div>
    )
} 


export default AppInfo;