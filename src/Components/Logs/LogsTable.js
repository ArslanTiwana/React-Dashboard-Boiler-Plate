import React, { useState, useEffect } from 'react';
import { Table, Input, Button, Space, Card } from 'antd';
import { debounce } from 'lodash';
import { SearchOutlined } from '@ant-design/icons';
import ReactDOMServer from 'react-dom/server';
import TopBar from '../Shared/TopBar';
import Login from '../Login/Login';
import Apex from '../Admin Dashboard/charts';

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
  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    const columns = [
      {
        title: 'IMEI',
        dataIndex: 'imei',
        key: 'imei',
      },
      {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
       
      },
      {
        title: 'Client Id',
        dataIndex: 'clientId',
        key: 'clientId',
        // Add a filter for searching in this column
        
      },
      {
        title: 'IMEI',
        dataIndex: 'imei',
        key: 'imei',
        // Add a filter for searching in this column
      },
      // Add similar columns for 'Type', 'Description', and 'Client Id'
    ];
    if (printWindow) {
      const printContent = (
        <>
                    <div style={{ marginBottom: '20px', textAlign: 'center' }}>
            <img src="path/to/logo.png" alt="Company Logo" style={{ maxWidth: '100%', maxHeight: '100px' }} />
            <h2>Company Name</h2>
            <p>Your company tagline or additional information</p>
          </div>
          <div style={{ marginBottom: '20px', textAlign: 'center' }}>
            <style>{`
              table {
                width: 100%;
                border-collapse: collapse;
                margin-bottom: 16px;
              }
              th, td {
                border: 1px solid #ddd;
                padding: 8px;
                text-align: left;
              }
              th {
                background-color: #f2f2f2;
              }
            `}</style>
            <Table
              dataSource={data}
              columns={columns}
              pagination={false} // Disable pagination in print view
              onChange={handleTableChange}
              bordered
              size="middle"
            />
          </div>
        </>
      );
      const printContentHtml = ReactDOMServer.renderToString(printContent);

      printWindow.document.write(`
        <html>
          <head>
            <title>Print</title>
            <link rel="stylesheet" type="text/css" href="your-styles.css" />
          </head>
          <body>${printContentHtml}</body>
        </html>
      `);

      printWindow.document.close();
      printWindow.print();
    } else {
      // Handle if pop-up is blocked
      alert('Please allow pop-ups to print.');
    }
  };
  return (
    <div>
      <Space direction="vertical" style={{ width: '100%' }}>
      <Button type="primary" onClick={handlePrint} style={{ marginBottom: 16 }}>
        Print
      </Button>
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
