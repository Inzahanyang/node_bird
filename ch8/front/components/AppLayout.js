import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { Col, Input, Menu, Row } from "antd";
import { useSelector } from "react-redux";
import Router from "next/router";
import LoginForm from "../containers/LoginForm";
import UserProfile from "../containers/UserProfile";

const AppLayout = ({ children }) => {
  const { me } = useSelector(state => state.user);

  const onSearch = value => {
    Router.push({ pathname: "/hashtag", query: { tag: value } }, `/hashtag/${value}`);
  };

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link href="/">
            <a>방구함</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link href="/profile" prefetch>
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="mail">
          <Input.Search enterButton style={{ verticalAlign: "middle" }} onSearch={onSearch} />
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {me ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <Link href="https://banguham.com">
            <a target="_blank">좋아요 매물보기</a>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default AppLayout;
