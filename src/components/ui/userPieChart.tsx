import IFileEmailDto from "@/models/file/IFileEmailDto";
import FileService from "@/services/file/fileService";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";

const UserPieChart = () => {
    const [userData, setUserData] = useState([] as IFileEmailDto[])
    const params = useParams();
    const libraryId = params.libraryId as string;

    useEffect(() => {
        getUserData();
    }, []);

    const getUserData = async () => {
        const result = await FileService.GetTotalSizeAccordingToEmail(libraryId);
        const data = result.data as IFileEmailDto[];
        if (data.length <= 0) return;

        setUserData(data);
    }

    const options = (title:string) => {
        return {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                title:{
                    display:true,
                    text:title
                }
            }
        }
    }

    const getData = () => {
        const labels = userData.map(d => d.email)
        const amountData = {
            labels: labels,
            datasets: [
                {
                    label: "Kullanıcıya Göre Dosya Yükleme Adeti",
                    data: userData.map(d => d.amount),
                    borderWidth: 1,
                    backgroundColor: '',
                }
            ]
        }

        const sizeData = {
            labels: labels,
            datasets: [
                {
                    label: "Kullanıcıya Göre Dosya Yükleme Miktarı(MB)",
                    data: userData.map(d => byteToMb(d.totalSize)),
                    borderWidth: 1,
                    backgroundColor: '',
                }
            ]
        }

        return { sizeData: sizeData, amountData: amountData }

    }

    const byteToMb = (byte: number) => {
        return byte / (1024 * 1024);
    }

    const { sizeData, amountData } = getData();

    return (
        <div className="h-full overflow-x-auto">
            <div className="text-center text-sm text-gray-500 select-none">Kullanıcıya Göre Dosya Yükleme</div>
            <div className="flex justify-around items-center h-5/6">
                <div className="h-full">
                    <Pie data={sizeData} options={options("Dosya Boyutu(MB)")} />
                </div>
                <div className="h-full">
                    <Pie data={amountData} options={options("Dosya Adeti")} />
                </div>
            </div>
        </div>

    );
}

export default UserPieChart;