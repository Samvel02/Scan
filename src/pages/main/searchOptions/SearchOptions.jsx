import React from 'react'
import './style.css'

const SearchOptions = () => {
    return (
      <div className="block" >
          <div className="flex">
              <div>
                  <h1 className="h1_title">Найдите необходимые данные в пару кликов.</h1>
                  <p className="p_text">Задайте параметры поиска.
                      Чем больше заполните, тем точнее поиск</p>
              </div>
              <div className="flex">
                  <div className="dockPickter">  </div>
                  <div className="DoubleDockPickter"></div>
              </div>


          </div>
          <div className="flex">

              <section className="sectionBlock">
                  <div className="sectionBlock_margin">
                      <div className="sectionBlock_leftBlock">
                          <p className="p_text">ИНН компании *</p>
                          <input className="input"></input>
                          <p className="p_text">Тональность</p>


                          <select id="selectvalue" className="input p_text">
                              <option className="input p_text">позитивная</option>
                              <option className="input p_text">негативная</option>
                              <option className="input p_text">любая</option>
                          </select>


                          <p className="p_text">Количество документов в выдаче *</p>
                          <input className="input"></input>

                          <p className="p_text dateMarginTop">Диапазон поиска *</p>
                          <div className="flexDate">
                              <input className="input p_text" type="date" />
                              <input className="input marginInput p_text" type="date" />
                          </div>
                      </div>
                      <div>
                          <div className="sectionBlock_marginRightBlock">
                              <div className= "marginChekbox whideCheckbox" >
                                  <label className="marginChekbox p_text">
                                      <input type="checkbox" id="scales1" name="scales" className="chekbox" />
                                      Признак максимальной полноты
                                  </label>
                              </div>
                              <div className="marginChekbox whideCheckbox">
                                  <label className="marginChekbox p_text">
                                      <input type="checkbox" id="scales2" name="scales" className="chekbox" />
                                      Упоминания в бизнес-контексте
                                  </label>
                              </div>
                              <div className="marginChekbox whideCheckbox">
                                  <label className="marginChekbox p_text">
                                      <input type="checkbox" id="scales3" name="scales" className="chekbox" />
                                      Публикации только с риск-факторами
                                  </label>
                              </div>
                              <div className="marginChekbox whideCheckbox">
                                  <label className="marginChekbox p_text">
                                      <input type="checkbox" id="scales4" name="scales" className="chekbox" />
                                      Включать технические новости рынков
                                  </label>
                              </div>
                              <div className="marginChekbox whideCheckbox">
                                  <label className="marginChekbox p_text">
                                      <input type="checkbox" id="scales5" name="scales" className="chekbox" />
                                      Включать анонсы и календари
                                  </label>
                              </div>
                              <div className="marginChekbox css.whideCheckbox">
                                  <label className="marginChekbox p_text">
                                      <input type="checkbox" id="scales6" name="scales" className="chekbox" />
                                      Включать сводки новостей
                                  </label>
                              </div>
                              <div className="marginChekbox whideCheckbox">
                                  <label className="marginChekbox p_text">
                                      <input type="checkbox" id="scales7" name="scales" className="chekbox" />
                                      Главная роль в публикации
                                  </label>
                              </div>

                              <button className="buttonLogIn" style={{ marginTop: "80px" }} >Поиск</button>

                          </div>
                      </div>


                  </div>
              </section>
              <div className="rocketPic"></div>
          </div>
      </div >
  );
}

export {SearchOptions}