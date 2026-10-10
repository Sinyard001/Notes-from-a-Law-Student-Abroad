const caseDetails = [
  {
    kicker: "CASE 01 / CONSUMER ELECTRONICS",
    title: "韶音：从骨传导到开放式智能音频",
    summary: "以中国高端消费电子品牌的全球化路径为样本，分析运动耳机如何扩展为开放式音频与 AI 穿戴平台。",
    context: "Omdia 口径显示，韶音 2023—2025 年连续三年保持全球开放式耳机出货量第一。2025 年开放式产品全球出货量已超过 3000 万台，行业从运动安全需求走向通勤、办公和 AI 穿戴。",
    product: "产品矩阵包括 OpenRun 运动后挂、OpenFit 日常耳挂、OpenSwim 游泳、OpenDots 耳夹和 AI 眼镜。核心产品逻辑是开放佩戴、防水防汗、漏音控制、续航与场景适配。",
    competitors: "苹果拼生态与渠道，华为拼手机生态，Bose 拼高端降噪，索尼拼音频技术，Oladance/Cleer/JBL 拼性价比。韶音应以运动专业、全球赛事和声学技术建立差异。",
    customer: "北美运动人群是基本盘，欧洲骑行与户外人群是高价值市场，通勤办公和科技尝鲜用户是增量盘。渠道重点是运动零售、Amazon、线下赛事、CES/IFA 与专业内容。",
    action: "将分析拆成三条增长线：运动产品维护专业心智；OpenFit 教育日常用户；AI 眼镜通过展会和开发者合作验证新入口。每条线分别设计产品卖点、内容和渠道。",
    kpi: "跟踪品类份额、区域收入、内容互动、试用转化和售后反馈。主要风险是苹果/华为巨头进入、医疗健康表述合规、AI 硬件软件生态投入。",
    role: "行业扫描、用户画像、产品矩阵拆解、竞品定位",
    deliverables: "产品分析报告、五类用户画像、竞品对照表、三条增长线建议",
    sources: "Omdia、弗若斯特沙利文、欧睿国际、CES/IFA 公开资料、品牌官网",
    quote: "真正的产品壁垒不是一个技术名词，而是技术、场景和全球品牌心智的组合。"
  },
  {
    kicker: "CASE 02 / CONSUMER ELECTRONICS",
    title: "安克创新：从亚马逊卖家到全球品牌",
    summary: "拆解安克创新如何用用户洞察、多品牌矩阵和全渠道经营，把中国供应链能力变成全球品牌资产。",
    context: "2025 年中国跨境电商进出口约 2.75 万亿元，平台规则、认证和小额免税政策收紧，消费电子出海从流量红利进入品牌、产品力和合规竞争。",
    product: "Anker 聚焦充电与储能，eufy 聚焦智能家居，Soundcore 聚焦影音，SOLIX 聚焦户外与家庭储能。2025 年总营收 305.14 亿元，海外收入占比约 96.6%。",
    competitors: "充电对手是 UGREEN、Baseus、Belkin；储能对手是 EcoFlow、Jackery、Bluetti；安防对手是 Ring、Arlo、Tapo；音频对手是 JBL、Sony、Bose。",
    customer: "北美仍是最大区域，欧洲 2025 年收入同比增长 43.5%。用户包括重度数码、商旅、家庭安防、影音创作者和户外备灾人群，渠道从 Amazon 延伸至独立站、Best Buy、Target。",
    action: "用‘用户评论→产品定义→供应链→品牌运营→全渠道服务’画出闭环，进一步评估储能、智能家居和 AI 硬件三条第二曲线的交叉销售机会。",
    kpi: "重点观察区域收入、品类收入、复购/交叉购买、库存周转、退货率和认证完成率。主要风险是北美集中度、汇率关税、电池召回、品类扩张和平台流量成本。",
    role: "经营结构分析、产品矩阵拆解、竞品横向比较、增长判断",
    deliverables: "业务结构图、四赛道竞品矩阵、区域用户画像、第二曲线建议",
    sources: "安克创新 2025 年报、海关总署、公司公开资料、CES/IFA、行业研究",
    quote: "安克能持续增长，更多来自一套可复制的产品与渠道系统，而不是某一个爆品。"
  },
  {
    kicker: "CASE 03 / INTERNATIONAL LOGISTICS",
    title: "菜鸟网络：从跨境电商物流到全球供应链基础设施",
    summary: "从海外仓、全球 5 日达到本地配送，分析平台物流如何变成品牌出海的供应链基础设施。",
    context: "海关总署数据显示，2025 年中国跨境电商进出口约 2.75 万亿元；运价回落后，行业竞争从拿到舱位转向全链路履约。海外仓、清关、本地配送和退货处理成为新的竞争点。",
    product: "菜鸟产品分三层：底层是国际干线、清关和海外仓；中层是跨境专线、FBA 头程和本地配送；顶层是面向平台、品牌和产业客户的供应链方案。阿里 2025 财年菜鸟营收约 1012.72 亿元。",
    competitors: "顺丰国际拼品牌、时效和航空运力；京东物流拼仓配一体与自动化；极兔拼东南亚末端和 COD；中外运拼央企网络与项目物流；DHL、FedEx、UPS 拼全球高端客户；Flexport、云途、递四方拼数字化和专线产品。",
    customer: "客户包括 AliExpress、Lazada、TikTok Shop、Temu、SHEIN 等平台，Amazon 与独立站卖家，中国制造和产业带客户，以及海外本地商家。平台客户贡献规模，品牌和产业客户贡献利润。",
    action: "把跨境履约的确定性做成产品标准：提升海外本地配送的可控性，建立海外仓产品分层和定价，向品牌客户提供库存预测、退货和售后增值服务。",
    kpi: "跟踪国际收入、海外仓周转、时效达成、单票成本、履约异常与退货处理时长。风险是阿里生态依赖、海外投入回报周期长、国际巨头竞争和关税合规变化。",
    role: "行业扫描、客户分层、全链路产品拆解、竞品研究",
    deliverables: "跨境履约产品图、客户分层表、竞品对照表、海外仓与本地配送建议",
    sources: "阿里巴巴集团 2025 财年业绩公告、菜鸟公开披露、海关总署、弗若斯特沙利文、公司官网与公开报道",
    quote: "菜鸟的机会不只是送货，而是把跨境履约变成可预测的供应链产品。"
  },
  {
    kicker: "CASE 04 / INTERNATIONAL LOGISTICS",
    title: "极兔速递：从东南亚第一到全球新兴市场网络",
    summary: "拆解加盟制、COD 和区域密度如何撑起规模，以及和顺丰协同后的跨境机会。",
    context: "东南亚、拉美和中东电商仍在渗透，快递竞争从价格战转向网络密度、时效、COD 和单票成本。2026 年初极兔与顺丰相互持股，补上了跨境头程和高端物流能力。",
    product: "极兔的产品核心是本地电商快递网络：加盟制网点、分拨中心、干线运输、COD 收款和本地派送；2025 年全球包裹量约 301.3 亿件、收入约 121.6 亿美元。与顺丰协同后，产品延伸到中国揽收、跨境干线和清关。",
    competitors: "菜鸟拼跨境全链路和数字系统，顺丰拼高端品牌与时效，SPX Express 和 Lazada Logistics 拼平台订单，Flash Express 和 Ninja Van 拼本地网络，iMile 拼中东和拉美末端，中通和圆通国际拼中国客户与跨境专线。",
    customer: "核心客户是 Shopee、TikTok Shop、Lazada、Temu、SHEIN 等平台，以及中小卖家和价格敏感的消费者；中国出海品牌和企业客户是需要补齐的增量。",
    action: "继续做深东南亚的利润质量，在拉美和中东复制区域网络时控制亏损和现金流；用顺丰的跨境能力把产品从目的国派送延伸到全链路。",
    kpi: "跟踪东南亚市占率、单票收入与成本、COD 回款、包裹量、新市场亏损和平台集中度。风险是价格战、平台政策变化、各国合规差异和海外网络投入。",
    role: "区域市场分析、客户分层、单位经济拆解、竞品研究",
    deliverables: "新兴市场网络图、客户结构表、竞品对照表、跨境协同建议",
    sources: "极兔速递 2025 年年度业绩公告、弗若斯特沙利文、顺丰与极兔战略合作公告、公司官网与公开报道",
    quote: "极兔的护城河是末端网络和单票成本，下一关是把规模变成利润和跨境能力。"
  },
  {
    kicker: "CASE 05 / AI MODEL EXPORT",
    title: "DeepSeek：从开源爆款到开发者基础设施",
    summary: "分析中国大模型如何通过开源、API 和全球开发者生态完成一次‘反向出海’。",
    context: "2025 年全球生成式 AI 应用下载量约 17 亿次。DeepSeek 2025 年全球下载超 1.7 亿次，2026 年 1—7 月收入约 7070 万美元（媒体口径），技术事件开始进入商业化验证阶段。",
    product: "产品不是单一聊天 App，而是开源模型、API、开发者工具和可部署的模型能力。核心价值是推理性价比、开放权重、私有化部署与全球开发者可接入。",
    competitors: "OpenAI 拼生态和付费心智，Anthropic 拼编程与 Agent，Google 拼云和搜索，Meta Llama 拼开源先发，阿里 Qwen、智谱 GLM 争夺开发者与 API 调用。",
    customer: "个人开发者、AI 应用创业者、跨境 SaaS、企业内部 AI 团队是核心客户。渠道是 Hugging Face、OpenRouter、云平台、GitHub 和开发者社区。",
    action: "用‘开源模型获取心智 + 高性能 API 变现 + 云渠道分发 + 开发者工具留存’验证商业闭环，并补充 SDK、评测、微调和 Agent 框架。",
    kpi: "关注模型下载、API 调用量、开发者留存、付费转化、推理成本和云平台覆盖。风险是政策与数据合规、模型能力被追赶、开源与商业化的平衡。",
    role: "AI 产品分析、开发者画像、商业模式拆解、竞品研究",
    deliverables: "模型产品地图、开发者分层、竞品定位表、开源/API 双轨方案",
    sources: "Sensor Tower、公司公开资料、Hugging Face、OpenRouter、媒体与行业研究",
    quote: "DeepSeek 要守住的不是下载量，而是‘开源模型第一选择 + 高性价比 API’的双重心智。"
  },
  {
    kicker: "CASE 06 / AI MODEL EXPORT",
    title: "智谱：GLM 与 MaaS 的全球商业化路径",
    summary: "从模型能力、Coding Plan、MaaS ARR 和云平台分发，分析企业级大模型如何服务全球开发者和出海企业。",
    context: "2025 年智谱收入 7.24 亿元、同比增长 131.9%，MaaS API 平台 ARR 约 17 亿元、同比提升 60 倍，服务已覆盖 218 个国家和地区。",
    product: "GLM 产品组合包括模型 API、Coding Plan、Agent、私有化部署和云平台托管。产品重点从‘能对话’转向‘能写代码、能执行任务、能进入企业工作流’。",
    competitors: "OpenAI/Anthropic 拥有全球开发者心智，DeepSeek 拼开源和价格，Qwen 拼开源与云资源，Google Gemini 拼云和安卓分发。智谱差异在编程/Agent、中国企业理解和 MaaS 服务。",
    customer: "全球开发者、中国出海企业、国内政企和行业客户构成四层用户。海外触达依靠 AWS Bedrock、Google Vertex AI、OpenRouter、Vercel 等平台，而非只靠 C 端 App。",
    action: "推进 SDK、微调、评测、Agent 模板与行业方案；与云厂商共建认证和推荐位；面向电商、游戏、客服和营销提供模型之外的解决方案。",
    kpi: "跟踪 ARR、付费开发者、API 调用、云平台覆盖、企业续约和国际收入占比。风险是合规与数据主权、持续亏损、全球品牌心智不足和模型竞争加剧。",
    role: "MaaS 产品拆解、B 端用户画像、渠道策略、商业化分析",
    deliverables: "MaaS 商业模式图、全球渠道地图、竞品比较、企业方案路线",
    sources: "智谱 2025 年报（HK2513）、公司 ARR 披露、Sensor Tower、云平台公开资料",
    quote: "智谱的出海不是把一个 App 卖到海外，而是让 GLM 成为全球开发者可选的基础模型。"
  }
];

const methodDetails = [
  {
    kicker: "STEP 01 / READ THE REAL NEED",
    title: "阅读客户需求：三级追问",
    lead: "回复询盘之前，先弄清这次采购对他来说意味着什么。",
    how: "先做基础的用户洞察：圈出目标客户，了解他现在的方案、预算、由谁决定、什么情况下才会购买。再用三层追问往下问：要什么规格（表层需求）、用在什么项目或设备（实际场景）、出问题后停工或退货的影响有多大（他在意的点）。最后用行业报告、海关数据、平台评价和竞品评论区相互印证，把“谁会买、为什么现在买、不买的原因是什么”写成一句可以执行的判断。",
    tools: "工具：行业报告 / 终端市场数据 / 询盘记录。话术：追问“这批货投到哪个项目、替换什么旧方案、一旦出问题影响有多大”。",
    example: "不要停在“我要 50 台设备”，要继续问：用在哪个产线？替换哪台旧设备？停机一天损失多少？",
  },
  {
    kicker: "STEP 02 / QUALIFY BEFORE YOU CHASE",
    title: "识别并筛选客户：MAN + 海关数据",
    lead: "询盘会越来越多，先做个简单判断，把时间留给可能性更大的客户。",
    how: "用 MAN 原则打分：Money（预算与采购量）、Authority（决策权）、Need（需求紧急度）。再用海关数据查客户近半年进口记录：采购稳定、并且正在减少向你的竞品下单的客户，才是 A 级客户。",
    tools: "工具：MAN 评分表 / 海关数据（如 ImportGenius）/ CRM 客户分级。",
    example: "客户过去每月从中国采购同品类，最近两票转向越南供应商：说明他正在重新比较成本，这是最佳开发窗口。",
  },
  {
    kicker: "STEP 03 / SELL THE OUTCOME",
    title: "把产品翻译成客户价值：FABE",
    lead: "先把产品能给客户带来的好处讲清楚，再补充具体参数。",
    how: "用 FABE 组织沟通：因为（特性）→所以（功能）→对您而言（利益）→证明（案例/数据）。把产品资料、竞品对照与测试报告准备成一套“价值证据包”。",
    tools: "工具：FABE 模板 / 案例数据 / 测试报告 / 竞品对照表。",
    example: "因为增加防腐涂层，所以更耐腐蚀；对您而言海边工地能多用 3 年；这是给某大型项目的测试报告。",
  },
  {
    kicker: "STEP 04 / GIVE A REASON TO REPLY",
    title: "完成第一次接触：先抛钩子",
    lead: "第一次联系，最好给对方一个愿意回复你的具体理由。",
    how: "首轮不报价、不追单，先抛钩子：给客户一个具体价值点，比如基于公开数据指出他的降本空间，整理成 3 点建议；第一次沟通结束时明确下一步（样品、视频验厂或技术会议）。",
    tools: "话术模板：“我们刚帮客户优化方案节省了 X% 成本，我整理了 3 点针对贵司的建议，方便发您参考吗？”",
    example: "第一轮沟通后必须约定下一步：安排样品测试、视频验厂，还是先做技术会议。",
  },
  {
    kicker: "STEP 05 / MEASURE BEFORE YOU OPTIMIZE",
    title: "记录五维数据：找到转化率拐点",
    lead: "客户一多，跟进内容容易忘；随手记录比事后回忆可靠。",
    how: "用 Excel 或 CRM 建表，记录客户来源、首次响应、跟进次数、异议点与结果五维数据；找出转化率拐点（例如第 3 封跟进回复率最高），把它固化为标准动作；把客户异议收集成第 03 步话术的迭代素材。",
    tools: "工具：CRM / Excel 复盘表 / 跟进节奏 SOP。",
    example: "如果数据显示第 3 次跟进回复率最高，就把“第 3 次跟进”设为固定动作，而不是凭感觉追。",
  },
  {
    kicker: "STEP 06 / BUILD THE NEXT ACCOUNT LIST",
    title: "制定客户开发计划：80/20",
    lead: "复盘之后，把下一次要联系的客户排好顺序。",
    how: "从第 05 步数据中找出“复购率最高”与“客单价最高”两类客户画像；80% 精力维护 A 类老客户（定期推新品、送样、回访），20% 用 LinkedIn Sales Navigator 定向开发同类新客户，按月排开发计划并每周批量执行。",
    tools: "工具：客户分层表 / 月度作战地图 / LinkedIn Sales Navigator。",
    example: "老客户每月固定推一次新品信息；每周定向添加 20 个同类新客户，并发一封定制 InMail。",
  },
];

const scroller = document.getElementById("scroller");
const pages = Array.from(document.querySelectorAll(".page"));
const navItems = Array.from(document.querySelectorAll(".nav-item"));

function goToPage(index) {
  const target = pages[index];
  if (!target) return;
  scroller.scrollTo({
    left: target.offsetLeft - scroller.offsetLeft,
    behavior: "smooth",
  });
}

document.querySelectorAll("[data-go]").forEach((el) => {
  el.addEventListener("click", (event) => {
    event.preventDefault();
    goToPage(Number(el.dataset.go));
  });
});

function updateActivePage() {
  const pos = scroller.scrollLeft;
  let active = 0;
  pages.forEach((page, index) => {
    const left = page.offsetLeft - scroller.offsetLeft;
    if (pos >= left - 40) active = index;
  });
  navItems.forEach((item, index) => {
    item.classList.toggle("active", index === active);
  });
}

scroller.addEventListener("scroll", updateActivePage, { passive: true });
updateActivePage();

const modal = document.querySelector(".modal");
const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".case-card");

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("active"));
    filter.classList.add("active");
    const selected = filter.dataset.filter;
    cards.forEach((card) => card.classList.toggle("hidden", selected !== "all" && card.dataset.category !== selected));
  });
});

function openCase(index) {
  const detail = caseDetails[index];
  document.querySelector("#modal-kicker").textContent = detail.kicker;
  document.querySelector("#modal-title").textContent = detail.title;
  document.querySelector("#modal-summary").textContent = detail.summary;
  document.querySelector("#modal-nav").innerHTML = ["行业背景", "产品分析", "竞品地图", "客户渠道", "行动计划", "指标风险"].map((item, index) => `<a href="#report-${index}"><b>0${index + 1}</b>${item}</a>`).join("");
  document.querySelector("#modal-context").textContent = detail.context;
  document.querySelector("#modal-product").textContent = detail.product;
  document.querySelector("#modal-competitors").textContent = detail.competitors;
  document.querySelector("#modal-customer").textContent = detail.customer;
  document.querySelector("#modal-action").textContent = detail.action;
  document.querySelector("#modal-kpi").textContent = detail.kpi;
  document.querySelector("#modal-role").textContent = detail.role;
  document.querySelector("#modal-deliverables").textContent = detail.deliverables;
  document.querySelector("#modal-sources").textContent = detail.sources;
  document.querySelector("#modal-quote").textContent = `“${detail.quote}”`;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeCase() {
  modal.hidden = true;
  document.body.style.overflow = "";
}

document.querySelectorAll(".case-link").forEach((button) => {
  button.addEventListener("click", () => openCase(Number(button.closest(".case-card").dataset.case)));
});
document.querySelector(".modal-close").addEventListener("click", closeCase);
document.querySelector(".modal-backdrop").addEventListener("click", closeCase);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) closeCase();
});

const methodModal = document.querySelector(".method-modal");

function openMethod(index) {
  const detail = methodDetails[index];
  document.querySelector("#method-kicker").textContent = detail.kicker;
  document.querySelector("#method-title").textContent = detail.title;
  document.querySelector("#method-lead").textContent = detail.lead;
  document.querySelector("#method-how").textContent = detail.how;
  document.querySelector("#method-tools").textContent = detail.tools;
  document.querySelector("#method-example").textContent = detail.example;
  methodModal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeMethod() {
  methodModal.hidden = true;
  document.body.style.overflow = "";
}

document.querySelectorAll(".method-enter").forEach((button) => {
  button.addEventListener("click", () => openMethod(Number(button.closest(".method-row").dataset.method)));
});
methodModal.querySelector(".method-close").addEventListener("click", closeMethod);
methodModal.querySelector(".modal-backdrop").addEventListener("click", closeMethod);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !methodModal.hidden) closeMethod();
});
