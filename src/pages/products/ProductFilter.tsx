import { useQuery } from "@tanstack/react-query";
import {
  Card,
  Col,
  Form,
  Input,
  Row,
  Select,
  Space,
  Switch,
  Typography,
} from "antd";
import { getCategories, getTenants } from "../../http/api";
import { Category, Tenant } from "../../types";
import { useAuthStore } from "../../store";

type ProductsFilterProps = {
  children?: React.ReactNode;
};
const ProductsFilter = ({ children }: ProductsFilterProps) => {
  const { user } = useAuthStore();
  const { data: restaurants } = useQuery({
    queryKey: ["restaurants"],
    queryFn: () => {
      return getTenants(`perPage=100&currentPage=1`);
    },
  });

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: () => {
      return getCategories();
    },
  });

  return (
    <Card>
      <Row justify="space-between">
        <Col flex={1}>
          <Row gutter={20}>
            <Col flex={1}>
              <Form.Item name="q">
                <Input.Search allowClear placeholder="Search" />
              </Form.Item>
            </Col>
            <Col flex={1}>
              <Form.Item name="categoryId">
                <Select
                  style={{ width: "100%" }}
                  placeholder="Select Category"
                  allowClear
                >
                  {categories?.data.map((category: Category) => {
                    return (
                      <Select.Option value={category._id}>
                        {category.name}
                      </Select.Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </Col>

            {user!.role === "admin" && (
              <Col flex={1}>
                <Form.Item name="tenantId">
                  <Select
                    style={{ width: "100%" }}
                    placeholder="Select restaurant"
                    allowClear
                  >
                    {restaurants?.data.data.map((restaurant: Tenant) => {
                      return (
                        <Select.Option value={restaurant.id}>
                          {restaurant.name}
                        </Select.Option>
                      );
                    })}
                  </Select>
                </Form.Item>
              </Col>
            )}

            <Col flex={1}>
              <Space>
                <Form.Item name="isPublish">
                  <Switch defaultChecked={false} onChange={() => {}} />
                </Form.Item>
                <Typography.Text>Show only published</Typography.Text>
              </Space>
            </Col>
          </Row>
        </Col>
        <Col flex={1} style={{ display: "flex", justifyContent: "end" }}>
          {children}
        </Col>
      </Row>
    </Card>
  );
};

export default ProductsFilter;
