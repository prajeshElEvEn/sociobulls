import { EditableProTable } from "@ant-design/pro-components";
import { Form } from "antd";
import React, { useRef, useState } from "react";

const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const handleEditPost = (action, id) => {
  action?.startEditable?.(id);
};
const handleDeletePost = (id) => {
  console.log(id);
};

const defaultData = [
  {
    id: 624748504,
    post: "this is some post",
    likesCount: 40,
    commentsCount: 26,
    created_at: 1590486176000,
    updated_at: 1590486176000,
    comments: [
      {
        id: 6248,
        comment: "this is some comment",
        created_at: 1590486176000,
        author: "John Doe",
      },
      {
        id: 6249,
        comment: "this is some comment",
        created_at: 1590486176000,
        author: "John Doe",
      },
    ],
  },
  {
    id: 624691229,
    post: "idk why this ain't working",
    likesCount: 40,
    commentsCount: 26,
    created_at: 1590486176000,
    updated_at: 1590486176000,
    comments: [
      {
        id: 6247,
        comment: "this is some comment",
        created_at: 1590486176000,
        author: "John Doe",
      },
    ],
  },
  {
    id: 624691231,
    post: "idk why this ain't working",
    likesCount: 40,
    commentsCount: 26,
    created_at: 1590486176000,
    updated_at: 1590486176000,
  },
  {
    id: 624691232,
    post: "idk why this ain't working",
    likesCount: 40,
    commentsCount: 26,
    created_at: 1590486176000,
    updated_at: 1590486176000,
  },
  {
    id: 624691233,
    post: "last one",
    likesCount: 40,
    commentsCount: 26,
    created_at: 1590486176000,
    updated_at: 1590486176000,
  },
  {
    id: 624691233,
    post: "last one",
    likesCount: 40,
    commentsCount: 26,
    created_at: 1590486176000,
    updated_at: 1590486176000,
  },
];

const columns = [
  {
    title: "Post",
    dataIndex: "post",
    formItemProps: {
      rules: [
        {
          required: true,
          message: "此项为必填项",
        },
      ],
    },
    width: "30%",
  },
  {
    title: "Likes",
    dataIndex: "likesCount",
  },
  {
    title: "Comments",
    dataIndex: "commentsCount",
  },
  {
    title: "Created At",
    dataIndex: "created_at",
    valueType: "date",
  },
  {
    title: "Last Updated",
    dataIndex: "updated_at",
    valueType: "date",
  },
  {
    title: "Action",
    valueType: "option",
    width: 250,
    render: (text, record, _, action) => [
      <a
        key="editable"
        onClick={() => {
          handleEditPost(action, record.id);
        }}
      >
        Edit
      </a>,
      <a
        key="delete"
        onClick={() => {
          handleDeletePost(record.id);
        }}
      >
        Delete
      </a>,
    ],
  },
];

const childColumns = [
  {
    title: "Comment",
    dataIndex: "comment",
  },
  {
    title: "Created At",
    dataIndex: "created_at",
    valueType: "date",
  },
  {
    title: "Author",
    dataIndex: "author",
  },
];

const expandedRowRender = (record) => {
  return (
    <EditableProTable
      rowKey="id"
      columns={childColumns}
      recordCreatorProps={false}
      request={async () => ({
        data: record.comments || [],
        total: record.comments ? record.comments.length : 0,
        success: true,
      })}
      value={record.comments || []}
      pagination={false}
    />
  );
};

const SomeTable = () => {
  const actionRef = useRef();
  const [editableKeys, setEditableRowKeys] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const [form] = Form.useForm();
  return (
    <>
      <EditableProTable
        expandable={{
          expandedRowRender: expandedRowRender,
          defaultExpandAllRows: false,
        }}
        rowKey="id"
        scroll={{
          x: 960,
        }}
        actionRef={actionRef}
        recordCreatorProps={false}
        columns={columns}
        request={async () => ({
          data: defaultData,
          total: defaultData.length,
          success: true,
        })}
        value={dataSource}
        onChange={setDataSource}
        editable={{
          form,
          editableKeys,
          onSave: async () => {
            await waitTime(2000);
          },
          onChange: setEditableRowKeys,
          actionRender: (row, config, dom) => [dom.save, dom.cancel],
        }}
        pagination={{
          showQuickJumper: true,
        }}
      />
    </>
  );
};

export default SomeTable;
