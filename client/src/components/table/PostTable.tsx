import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditableProTable } from "@ant-design/pro-components";
import { Form } from "antd";
import {
  deletePost,
  getUserPosts,
  updatePost,
} from "../../features/post/postSlice";
import Loading from "../utils/Loading";

const PostTable: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useSelector((state: any) => state.auth);
  const { posts, postIsLoading } = useSelector((state: any) => state.post);

  const actionRef = useRef<any>();
  const [editableKeys, setEditableRowKeys] = useState<string[]>([]);
  const [dataSource, setDataSource] = useState<any[]>([]);
  const [form] = Form.useForm();

  useEffect(() => {
    dispatch(getUserPosts({ id: id }));
  }, [dispatch, id]);

  const handleEditPost = (action: any, id: string) => {
    action?.startEditable?.(id);
  };

  const handleDeletePost = (id: string) => {
    dispatch(deletePost({ id: id }));
    setDataSource(dataSource.filter((item) => item.id !== id));
  };

  const handleSubmit = async (values: any, id: string) => {
    await dispatch(updatePost({ id: id, title: values.title }));
    setEditableRowKeys([]);
  };

  const columns = [
    {
      title: "Post",
      dataIndex: "title",
      formItemProps: {
        rules: [
          {
            required: true,
            message: "Post can't be empty",
          },
        ],
      },
      width: "30%",
    },
    {
      title: "Likes",
      dataIndex: "likes",
      render: (text: any, record: any) => {
        const likesCount = record.likes ? record.likes.length : 0;
        return <span>{likesCount}</span>;
      },
      editable: false,
    },
    {
      title: "Bookmarks",
      dataIndex: "bookmarks",
      render: (text: any, record: any) => {
        const bookmarksCount = record.bookmarks ? record.bookmarks.length : 0;
        return <span>{bookmarksCount}</span>;
      },
      editable: false,
    },
    {
      title: "Comments",
      dataIndex: "comments",
      render: (text: any, record: any) => {
        const commentsCount = record.comments ? record.comments.length : 0;
        return <span>{commentsCount}</span>;
      },
      editable: false,
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      valueType: "date",
      editable: false,
    },
    {
      title: "Last Updated",
      dataIndex: "updatedAt",
      valueType: "date",
      editable: false,
    },
    {
      title: "Action",
      valueType: "option",
      width: 250,
      render: (text: any, record: any, _: any, action: any) => [
        <a
          key="editable"
          onClick={() => {
            handleEditPost(action, record._id);
          }}
        >
          Edit
        </a>,
        <a
          key="delete"
          onClick={() => {
            handleDeletePost(record._id);
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
      dataIndex: "title",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      valueType: "date",
    },
    {
      title: "Author",
      dataIndex: "author",
      render: (text: any, record: any) => {
        return <span>{record?.name}</span>;
      },
    },
  ];

  const expandedRowRender = (record: any) => {
    return (
      <EditableProTable
        rowKey="_id"
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

  if (postIsLoading) {
    return <Loading />;
  }

  return (
    <>
      <EditableProTable
        expandable={{
          expandedRowRender: expandedRowRender,
          defaultExpandAllRows: false,
        }}
        rowKey="_id"
        scroll={{
          x: 960,
        }}
        actionRef={actionRef}
        recordCreatorProps={false}
        columns={columns}
        request={async () => ({
          data: posts,
          total: posts.length,
          success: true,
        })}
        value={dataSource}
        onChange={setDataSource}
        editable={{
          form,
          editableKeys,
          onSave: async (key: string, row: any) => {
            handleSubmit(row, key);
          },
          onChange: setEditableRowKeys,
          actionRender: (row: any, config: any, dom: any) => [
            dom.save,
            dom.cancel,
          ],
        }}
        pagination={{
          showQuickJumper: true,
        }}
      />
    </>
  );
};

export default PostTable;
