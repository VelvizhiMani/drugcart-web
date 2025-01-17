export default function DashboardLayout({ children }) {
  return (
    <>
      <header style={{backgroundColor:'red'}}>Dashboard Header</header>
        {children}
        <footer style={{backgroundColor:'red'}}>Dashboard Footer</footer>
    </>
  )
}
