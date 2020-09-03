import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/index.scss"

export default function Home() {
	return (
		<Layout>
			<SEO title="Kiwi's Portfolio" />

			<div className="intro">
				<p>안녕하세요<br />
				하루의 1%를 모아<br />
				1년, 36배 성장을 목표로 하는 개발자 Kiwi입니다.</p>

				<h1>제 목표는</h1>

				<p>저의 능력이 사람들에게 도움이 될 때 행복감을 느끼며 이를 위해서 SW 개발자의 길로 입문하게 되었습니다 :)<br />
				아직 많이 부족하지만 하루에 하나씩이라도 모르는 것들을 배워나가기 위해 노력합니다.<br />
				이 포트폴리오는 저라는 사람이 누구인지, 어떤 것들을 해왔고 어떤 것들을 할 수 있는지<br />
				최대한 객관적으로 소개하기 위해 만들었습니다. 최대한 경험에 기반하여, 해보았고, 할 수 있는 일들 위주로 채워보았습니다.</p>
			</div>

			<div className="overall-experiences">
				<h1>OVERALL EXPERIENCES</h1>
			</div>
		</Layout>
	)
}
