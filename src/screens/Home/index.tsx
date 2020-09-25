import React from "react";
import {
  Form,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button
} from "antd";

import { i18n } from "i18n";
import { MainWrapper, Title, Description, Grid, Card, Code } from "./styles";

const { Item } = Form;
const { Option } = Select;

const HomeScreen: React.FunctionComponent<{ t: any }> = (props) => {
  const { t } = props;
  return (
    <div>
      <Button onClick={() => i18n.changeLanguage("en")}>EN</Button>

      <Button onClick={() => i18n.changeLanguage("cn")}>CN</Button>

      <MainWrapper>
        <Title className="title">
          Welcome to <a href="https://nextjs.org">{t("poweredBy")}</a>
        </Title>

        <Description className="description">
          Get started by editing <Code>pages/index.tsx</Code>
        </Description>

        <Grid className="grid">
          <Card href="https://nextjs.org/docs" className="card">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </Card>

          <Card href="https://nextjs.org/learn" className="card">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </Card>

          <Card
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card">
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </Card>

          <Card
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card">
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </Card>
        </Grid>
      </MainWrapper>

      <h1>AntD</h1>
      <Form
        layout="horizontal"
        initialValues={{
          inputNumber: 3,
          switch: true,
          someSlider: 70,
          select: "jack"
        }}>
        <Item
          label="Input Number"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
          name="inputNumber">
          <InputNumber size="large" min={1} max={10} style={{ width: 100 }} />
        </Item>

        <Item
          label="Switch"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
          name="switch"
          valuePropName="checked">
          <Switch />
        </Item>

        <Item
          label="Slider"
          name="someSlider"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}>
          <Slider />
        </Item>

        <Item
          label="Select"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
          name="select">
          <Select size="large" style={{ width: 192 }}>
            <Option value="jack">jack</Option>
            <Option value="lucy">lucy</Option>
            <Option value="disabled" disabled>
              disabled
            </Option>
            <Option value="yiminghe">yiminghe</Option>
          </Select>
        </Item>

        <Item
          label="DatePicker"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
          name="startDate">
          <DatePicker />
        </Item>
        <Item style={{ marginTop: 48 }} wrapperCol={{ span: 8, offset: 8 }}>
          <Button size="large" type="primary" htmlType="submit">
            OK
          </Button>
          <Button size="large" style={{ marginLeft: 8 }}>
            Cancel
          </Button>
        </Item>
      </Form>
    </div>
  );
};

export default HomeScreen;
