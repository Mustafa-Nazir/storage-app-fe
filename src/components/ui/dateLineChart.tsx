import IFileDateDto from "@/models/file/IFileDateDto";
import FileService from "@/services/file/fileService";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart , registerables } from "chart.js";
Chart.register(...registerables);

const DateLineChart = () => {
    const [dateData, setDateData] = useState([] as { date: string, amount: number }[]);
    const params = useParams();
    const libraryId = params.libraryId as string;

    useEffect(() => {
        getDateData();
    }, []);

    const getDateData = async () => {
        const result = await FileService.GetAmountAccordingToDate(libraryId);
        const data = result.data as IFileDateDto[];
        if (data.length <= 0) return;

        const convertedData = data.map(d => { 
            const uploadDate = d.date.toString().split("T")[0].split("-");
            return { date: `${uploadDate[2]}-${uploadDate[1]}` , amount: d.amount } 
        })
        setDateData(convertedData);
    };

    const options = {
        maintainAspectRatio: false,
        aspectRatio: 1,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    const getData = () => {
        const data = {
            labels: dateData.map(d => d.date),
            datasets: [
                {
                    label: 'Günlük Dosya Yükleme Adeti',
                    data: dateData.map(d => d.amount),
                    fill: false,
                    backgroundColor: 'rgb(75, 192, 192)',
                    borderColor: 'rgba(75, 192, 192, 0.2)',
                    tension: 0
                }
            ]
        }

        return data
    };

    return (
        <Line data={getData()} options={options} />
    );
}

export default DateLineChart;