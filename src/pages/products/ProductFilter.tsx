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

type ProductsFilterProps = {
  children?: React.ReactNode;
};
const ProductsFilter = ({ children }: ProductsFilterProps) => {
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
              <Form.Item name="role">
                <Select
                  style={{ width: "100%" }}
                  placeholder="Select Category"
                  allowClear
                >
                  <Select.Option value="pizza">pizza</Select.Option>
                  <Select.Option value="beverages">Beverages</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col flex={1}>
              <Form.Item name="role">
                <Select
                  style={{ width: "100%" }}
                  placeholder="Select restaurant"
                  allowClear
                >
                  <Select.Option value="pizzahub">Pizza Hub</Select.Option>
                  <Select.Option value="softycorner">
                    Softy Corner
                  </Select.Option>
                </Select>
              </Form.Item>
            </Col>

            <Col flex={1}>
              <Space>
                <Switch defaultChecked onChange={() => {}} />
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
