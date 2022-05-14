import Head from "next/head";
import { getMenus } from "../api/menu";

export async function getStaticProps() {
  return getMenus();
}

export default function Menu({ menuItems }) {
  return (
    <div className="page-menu">
      <Head>
        <title>Dylan's Cafe: Menus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <section className="section-container">
          <div className="container">
            {menuItems.map((category, index) => (
              <div key={index} className="menu-category">
                <div className="category-item">
                  <h3 className="title">{category.name}</h3>
                  {category?.description && <span>{category.description}</span>}
                </div>
                {category.items.map((item, idx) => (
                  <div key={idx} className={`menu-item`}>
                    <div className="left-container">
                      <h6 className="menu-item-name">{item.name}</h6>
                      {item?.description && (
                        <p className="menu-item-description">
                          {item.description}
                        </p>
                      )}
                    </div>
                    <div className="right-container">
                      <span className="menu-item-price">£{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
