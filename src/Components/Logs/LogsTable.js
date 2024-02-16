import React, { useState, useEffect } from 'react';
import { Table, Input, Button, Space } from 'antd';
import { debounce } from 'lodash';
import { SearchOutlined } from '@ant-design/icons';

const LogsTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(100);
  const [queryParams, setQueryParams] = useState({
    imei: '',
    type: '',
    description: '',
    clientId: '',
    page: 1,
    pageSize:10,
    added_at: '',
  });

  const debouncedFetchData = debounce(() => fetchData(), 500);

  const fetchData = async () => {
    try {
      setLoading(true);
      // Simulating an API call with dummy data
      const dummyResponse = {
        records: [
          { imei: '123', type: 'A', description: 'Log 1', clientId: 'Client 1' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },
          { imei: '456', type: 'B', description: 'Log 2', clientId: 'Client 2' },

        ],
        totalCount: 50, // Adjust the total count based on your data
      };
      setData(dummyResponse.records);
      setTotal(dummyResponse.totalCount);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    debouncedFetchData();
  };

  const handleTableChange = (pagination) => {
    setQueryParams({
      ...queryParams,
      page: pagination.current,
      pageSize: pagination.pageSize,
    });
  };

  useEffect(() => {
    fetchData();
  }, [queryParams]);

  const columns = [
    {
      title: 'IMEI',
      dataIndex: 'imei',
      key: 'imei',
      // Add a filter for searching in this column
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search IMEI"
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => handleSearch()}
          />
          <Space>
            <Button
              type="primary"
              onClick={() => handleSearch()}
              icon={<SearchOutlined />}
              size="small"
              style={{ width: 90 }}
            >
              Search
            </Button>
            <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
              Reset
            </Button>
          </Space>
        </div>
      ),
      // Add filter icon to the column header
      filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      // Add a filter for searching in this column
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search Type"
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => handleSearch()}
          />
          <Space>
            <Button
              type="primary"
              onClick={() => handleSearch()}
              icon={<SearchOutlined />}
              size="small"
              style={{ width: 90 }}
            >
              Search
            </Button>
            <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
              Reset
            </Button>
          </Space>
        </div>
      ),
      // Add filter icon to the column header
      filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    },
    {
      title: 'Client Id',
      dataIndex: 'clientId',
      key: 'clientId',
      // Add a filter for searching in this column
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search Client Id"
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => handleSearch()}
          />
          <Space>
            <Button
              type="primary"
              onClick={() => handleSearch()}
              icon={<SearchOutlined />}
              size="small"
              style={{ width: 90 }}
            >
              Search
            </Button>
            <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
              Reset
            </Button>
          </Space>
        </div>
      ),
      // Add filter icon to the column header
      filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    },
    {
      title: 'IMEI',
      dataIndex: 'imei',
      key: 'imei',
      // Add a filter for searching in this column
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search IMEI"
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => handleSearch()}
          />
          <Space>
            <Button
              type="primary"
              onClick={() => handleSearch()}
              icon={<SearchOutlined />}
              size="small"
              style={{ width: 90 }}
            >
              Search
            </Button>
            <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
              Reset
            </Button>
          </Space>
        </div>
      ),
      // Add filter icon to the column header
      filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    },
    // Add similar columns for 'Type', 'Description', and 'Client Id'
  ];

  return (
    <div>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Space>
          <Input
            placeholder="IMEI"
            value={queryParams.imei}
            onChange={(e) => setQueryParams({ ...queryParams, imei: e.target.value })}
          />
          <Input
            placeholder="Type"
            value={queryParams.type}
            onChange={(e) => setQueryParams({ ...queryParams, type: e.target.value })}
          />
          <Input
            placeholder="Description"
            value={queryParams.description}
            onChange={(e) => setQueryParams({ ...queryParams, description: e.target.value })}
          />
          <Input
            placeholder="Client Id"
            value={queryParams.clientId}
            onChange={(e) => setQueryParams({ ...queryParams, clientId: e.target.value })}
          />
          <Button type="primary" onClick={handleSearch}>
            Search
          </Button>
        </Space>
        <Table
          dataSource={data}
          columns={columns}
          loading={loading}
          pagination={{
            total:total,
            pageSize: queryParams.pageSize,
            current: queryParams.page,
            showSizeChanger: true, 
            onChange: (page, pageSize) => handleTableChange({ current: page, pageSize }),
          }}
           onChange={handleTableChange}
        />
      </Space>
    </div>
  );
};

export default LogsTable;
