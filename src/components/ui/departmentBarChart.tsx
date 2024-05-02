import IFileDepartmentDto from "@/models/file/IFileDepartmentDto";
import ILibrary from "@/models/library/ILibrary";
import FileService from "@/services/file/fileService";
import LibraryService from "@/services/library/libraryService";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

const DepartmentBarChart = () => {
    const [departmentData, setDepartmentData] = useState([] as { departmentName: string, totalSize: number, amount: number }[]);
    const [departmentsAndRoles, setDepartmentsAndRoles] = useState({} as ILibrary);
    const params = useParams();
    const libraryId = params.libraryId as string;

    useEffect(() => {
        getDepartmentsAndRoles();
    }, [])

    useEffect(() => {
        getDepartmentData();
    }, [departmentsAndRoles])

    const getDepartmentData = async () => {
        const result = await FileService.GetTotalSizeAccordingToDepartment(libraryId);
        const data = result.data as IFileDepartmentDto[]
        if (data.length <= 0) return;

        const convertedData = data.map(d => {
            const departmentName = getDepertmentName(d.departmentId);

            return {
                departmentName: departmentName,
                totalSize: d.totalSize,
                amount: d.amount
            }
        })

        setDepartmentData(convertedData);
    };

    const getDepartmentsAndRoles = async () => {
        const result = await LibraryService.GetDepartmentsAndRolesByLibraryId(libraryId);
        setDepartmentsAndRoles(result.data as ILibrary);
    }

    const getDepertmentName = (departmentId: string) => {
        if (departmentId == libraryId) return "Genel";
        const department = departmentsAndRoles.departments?.find(d => d._id == departmentId);
        if (department) return department.name
        return "-";
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Departmana Göre Dosya Yükleme Grafiği'
            }
        }
    };

    const getData = () => {
        const labels = departmentData.map(d => d.departmentName)
        const sizeData = {
            labels: labels,
            datasets: [
                {
                    label: 'Toplam boyut(MB)',
                    data: departmentData.map(d => byteToMb(d.totalSize)),
                    borderWidth: 1
                }
            ]
        };

        const amountData = {
            labels: labels,
            datasets: [
                {
                    label: 'Toplam adet',
                    data: departmentData.map(d => d.amount),
                    borderWidth: 1
                }
            ]
        }

        return { sizeData: sizeData, amountData: amountData };
    }

    const byteToMb = (byte: number) => {
        return byte / (1024 * 1024);
    }

    const { sizeData, amountData } = getData();

    return (
        <div className="flex flex-col justify-between h-full">
            <Bar data={sizeData} options={options} />
            <Bar data={amountData} options={options} />
        </div>
    );
}

export default DepartmentBarChart;