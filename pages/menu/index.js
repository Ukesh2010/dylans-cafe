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
                  {category?.description && (
                    <span className="subtitle">{category.description}</span>
                  )}
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
                      <span className="menu-item-price text-primary">
                        £ {item.price}
                      </span>
                    </div>
                  </div>
                ))}

                {category?.cookingStyle && (
                  <ul className="cooking-style-list">
                    {category.cookingStyle.map((style, idx) => (
                      <li key={idx} className="list-item">
                        {style}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="container">
            <p>
              Order from a variety of starters, our specialties, tandoori, and
              vegetarian dishes from our Nepalese , Indian and indo_chinese
              takeaway menu in Medway . Our delicious dishes are awesome for
              meat lovers as well as vegetarians.
            </p>
            <p>
              All our food is prepared daily with superior quality by our
              professional chefs , using & fresh ingredients, without
              compromise. Come & enjoy the exotic flavors and subtle tastes of
              the finest cuisine .Please let us know if you have any allergies
              or particular dietary requirements.
            </p>
            <p>
              FOOD ALLERGIES: Please speak to our staff about the ingredients in
              your meal, when making your order.
            </p>
            <p className="text-primary">
              PARTIES: Special arrangements available for parties
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
