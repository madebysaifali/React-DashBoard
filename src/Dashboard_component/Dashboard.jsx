import React from 'react';
import {
  Row,
  Col,
  Card,
  Table,
  ProgressBar,
  Badge,
  Dropdown,
} from 'react-bootstrap';
import {
  FaUsers,
  FaProjectDiagram,
  FaDollarSign,
  FaEllipsisV,
  FaDownload,
  FaCheckCircle,
  FaClock,
} from 'react-icons/fa';
// Charts components
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from 'recharts';

// Dummy Data for Analytics
const revenueData = [
  { name: 'Jan', revenue: 4000 },
  { name: 'Feb', revenue: 3000 },
  { name: 'Mar', revenue: 5000 },
  { name: 'Apr', revenue: 2780 },
  { name: 'May', revenue: 1890 },
  { name: 'Jun', revenue: 2390 },
];

const projectStatusData = [
  { name: 'Completed', value: 450, color: '#10b981' },
  { name: 'In Progress', value: 300, color: '#6366f1' },
  { name: 'Pending', value: 150, color: '#f59e0b' },
];

const weeklyActivityData = [
  { day: 'Mon', tasks: 12 },
  { day: 'Tue', tasks: 19 },
  { day: 'Wed', tasks: 15 },
  { day: 'Thu', tasks: 22 },
  { day: 'Fri', tasks: 30 },
];

const skillsData = [
  { subject: 'UI Design', A: 120, fullMark: 150 },
  { subject: 'UX Research', A: 98, fullMark: 150 },
  { subject: 'Coding', A: 86, fullMark: 150 },
  { subject: 'Prototyping', A: 99, fullMark: 150 },
  { subject: 'Strategy', A: 85, fullMark: 150 },
];

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h3 className="fw-bold mb-0 text-dark">Professional Analytics</h3>
          <p className="text-muted small">
            Welcome back, Saif Ali | UI/UX Designer
          </p>
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-primary rounded-pill px-4 shadow-sm bg-white">
            <FaClock className="me-2" /> Schedule
          </button>
          <button className="btn btn-primary rounded-pill px-4 shadow-sm">
            <FaDownload className="me-2" /> Generate Report
          </button>
        </div>
      </div>

      <Row className="g-4 mb-4">
        {[
          {
            title: 'Total Revenue',
            val: '$45,285',
            color: 'primary',
            icon: <FaDollarSign />,
          },
          {
            title: 'Active Clients',
            val: '1,240',
            color: 'success',
            icon: <FaUsers />,
          },
          {
            title: 'Live Projects',
            val: '85',
            color: 'warning',
            icon: <FaProjectDiagram />,
          },
          {
            title: 'Success Rate',
            val: '94.2%',
            color: 'info',
            icon: <FaCheckCircle />,
          },
        ].map((item, i) => (
          <Col md={3} sm={6} key={i}>
            <Card className="border-0 shadow-sm rounded-4 h-100 p-2">
              <Card.Body className="d-flex align-items-center gap-3">
                <div
                  className={`p-3 rounded-circle bg-${item.color} bg-opacity-10 text-${item.color}`}
                >
                  {item.icon}
                </div>
                <div>
                  <h6 className="text-muted small mb-0">{item.title}</h6>
                  <h4 className="fw-bold mb-0">{item.val}</h4>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Row 1: Main Charts (col-lg-6) */}
      <Row className="g-4 mb-4">
        <Col lg={6}>
          <Card className="border-0 shadow-sm rounded-4 h-100 p-4">
            <h6 className="fw-bold mb-4">Revenue Growth Trend</h6>
            <div style={{ width: '100%', height: 250 }}>
              <ResponsiveContainer>
                <AreaChart data={revenueData}>
                  <defs>
                    <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#eee"
                  />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis hide />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="#6366f1"
                    fillOpacity={1}
                    fill="url(#colorRev)"
                    strokeWidth={3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </Col>

        <Col lg={6}>
          <Card className="border-0 shadow-sm rounded-4 h-100 p-4">
            <h6 className="fw-bold mb-4">Project Distribution</h6>
            <div style={{ width: '100%', height: 250 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={projectStatusData}
                    innerRadius={60}
                    outerRadius={80}
                    dataKey="value"
                    paddingAngle={8}
                  >
                    {projectStatusData.map((e, i) => (
                      <Cell key={i} fill={e.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend verticalAlign="bottom" align="center" />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </Col>
      </Row>

      {/* Row 2: Secondary Charts (col-lg-6) */}
      <Row className="g-4 mb-4">
        <Col lg={6}>
          <Card className="border-0 shadow-sm rounded-4 h-100 p-4">
            <h6 className="fw-bold mb-4">Weekly Activity</h6>
            <div style={{ width: '100%', height: 250 }}>
              <ResponsiveContainer>
                <BarChart data={weeklyActivityData}>
                  <XAxis dataKey="day" axisLine={false} tickLine={false} />
                  <Tooltip cursor={{ fill: 'transparent' }} />
                  <Bar
                    dataKey="tasks"
                    fill="#0ea5e9"
                    radius={[10, 10, 0, 0]}
                    barSize={40}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </Col>

        <Col lg={6}>
          <Card className="border-0 shadow-sm rounded-4 h-100 p-4">
            <h6 className="fw-bold mb-4">Performance Metrics</h6>
            <div style={{ width: '100%', height: 250 }}>
              <ResponsiveContainer>
                <RadarChart
                  cx="50%"
                  cy="50%"
                  outerRadius="80%"
                  data={skillsData}
                >
                  <PolarGrid stroke="#eee" />
                  <PolarAngleAxis
                    dataKey="subject"
                    tick={{ fontSize: 11, fill: '#666' }}
                  />
                  <Radar
                    name="Saif Ali"
                    dataKey="A"
                    stroke="#6366f1"
                    fill="#6366f1"
                    fillOpacity={0.5}
                  />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </Col>
      </Row>

      {/* Row 3: Full Width Projects Table */}
      <Row>
        <Col lg={12}>
          <Card className="border-0 shadow-sm rounded-4 overflow-hidden">
            <Card.Header className="bg-white border-0 py-4 px-4 d-flex justify-content-between align-items-center">
              <div>
                <h5 className="mb-0 fw-bold text-dark">
                  Recent Client Projects
                </h5>
                <p className="text-muted small mb-0">
                  Overview of latest design tasks and milestones
                </p>
              </div>
              <Dropdown>
                <Dropdown.Toggle
                  variant="light"
                  className="btn-sm border-0 rounded-circle shadow-none"
                >
                  <FaEllipsisV />
                </Dropdown.Toggle>
                <Dropdown.Menu className="border-0 shadow-sm">
                  <Dropdown.Item>Refresh Table</Dropdown.Item>
                  <Dropdown.Item>View Full List</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Card.Header>

            <Table responsive hover className="mb-0 custom-dashboard-table">
              <thead className="bg-light">
                <tr>
                  <th className="ps-4 py-3 border-0 text-muted small fw-bold">
                    PROJECT NAME
                  </th>
                  <th className="border-0 text-muted small fw-bold">CLIENT</th>
                  <th className="border-0 text-muted small fw-bold">STATUS</th>
                  <th className="border-0 text-muted small fw-bold">
                    PROGRESS
                  </th>
                  <th className="border-0 text-muted small fw-bold">
                    DUE DATE
                  </th>
                  <th className="pe-4 border-0 text-muted small fw-bold text-end">
                    BUDGET
                  </th>
                </tr>
              </thead>
              <tbody className="border-top-0">
                {[
                  {
                    name: 'Portfolio Website',
                    client: 'John Doe',
                    date: '12 Feb 2026',
                    status: 'Completed',
                    color: 'success',
                    progress: 100,
                    budget: '$1,200',
                  },
                  {
                    name: 'E-commerce App',
                    client: 'Nexus Tech',
                    date: '25 Feb 2026',
                    status: 'In Progress',
                    color: 'primary',
                    progress: 65,
                    budget: '$4,500',
                  },
                  {
                    name: 'Fintech Dashboard',
                    client: 'Global Bank',
                    date: '10 Mar 2026',
                    status: 'Planning',
                    color: 'warning',
                    progress: 25,
                    budget: '$3,800',
                  },
                  {
                    name: 'SaaS Landing Page',
                    client: 'Cloudly Inc',
                    date: '18 Feb 2026',
                    status: 'In Progress',
                    color: 'primary',
                    progress: 85,
                    budget: '$1,500',
                  },
                  {
                    name: 'Brand Identity',
                    client: 'Lumina Soft',
                    date: '05 Mar 2026',
                    status: 'Pending',
                    color: 'danger',
                    progress: 10,
                    budget: '$2,200',
                  },
                  {
                    name: 'Mobile UI Kit',
                    client: 'Internal',
                    date: '14 Feb 2026',
                    status: 'Completed',
                    color: 'success',
                    progress: 100,
                    budget: '$0',
                  },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className="align-middle border-bottom border-light"
                  >
                    <td className="ps-4 py-4 fw-bold text-dark">{row.name}</td>
                    <td className="text-muted">{row.client}</td>
                    <td>
                      <Badge
                        bg={row.color}
                        className="bg-opacity-10 text-dark fw-normal rounded-pill px-3 py-2"
                        style={{ color: `var(--bs-${row.color})` }}
                      >
                        {row.status}
                      </Badge>
                    </td>
                    <td style={{ width: '180px' }}>
                      <div className="d-flex align-items-center gap-2">
                        <span
                          className="small text-muted"
                          style={{ minWidth: '35px' }}
                        >
                          {row.progress}%
                        </span>
                        <ProgressBar
                          variant={row.color}
                          now={row.progress}
                          style={{ height: '6px' }}
                          className="rounded-pill flex-grow-1"
                        />
                      </div>
                    </td>
                    <td className="text-muted small">{row.date}</td>
                    <td className="pe-4 text-end fw-bold">{row.budget}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div className="card-footer bg-white border-0 py-3 text-center">
              <a
                href="#"
                className="text-primary text-decoration-none small fw-bold"
              >
                View All Projects
              </a>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
