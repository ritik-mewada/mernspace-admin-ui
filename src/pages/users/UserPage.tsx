import { Breadcrumb, Space, Table } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { Link, Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../http/api";
import { User } from "../../types";
import { useAuthStore } from "../../store";
import UsersFilter from "./UsersFilter";

const columns = [
    {
        title: "ID",
        dataIndex: "id",
        key: "id",
    },
    {
        title: "Name",
        dataIndex: "firstName",
        key: "firstName",
        render: (_text: string, record: User) => {
            return (
                <div>
                    {record.firstName} {record.lastName}
                </div>
            );
        },
    },
    {
        title: "Role",
        dataIndex: "role",
        key: "role",
    },
    {
        title: "Email",
        dataIndex: "email",
        key: "email",
    },
];

const UserPage = () => {
    const {
        data: users,
        isLoading,
        error,
        isError,
    } = useQuery({
        queryKey: ["users"],
        queryFn: () => {
            return getUsers().then((response) => response.data);
        },
    });

    const { user } = useAuthStore();
    if (user?.role !== "admin") {
        return <Navigate to="/" replace={true} />;
    }
    return (
        <>
            <Space direction="vertical" size="large" style={{ width: "100%" }}>
                <Breadcrumb
                    separator={<RightOutlined />}
                    items={[
                        {
                            title: <Link to="/">Dashboard</Link>,
                        },
                        {
                            title: "Users",
                        },
                    ]}
                />
                {isLoading && <p>Loading users...</p>}
                {isError && <p>Error loading users: {error.message}</p>}

                <UsersFilter
                    onFilterChange={(filterName, filterValue) => {
                        console.log(
                            `Filter changed: ${filterName} = ${filterValue}`
                        );
                    }}
                />

                <Table columns={columns} dataSource={users?.data} rowKey="id" />
            </Space>
        </>
    );
};

export default UserPage;
