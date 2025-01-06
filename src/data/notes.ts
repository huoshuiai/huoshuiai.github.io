interface Note {
    id: number;
    title: string;
    date: string;
    content: string;
}

export const notesData: Record<number, Note> = {
    1: {
        id: 1,
        title: "认知写作课程作业：隐喻分析",
        date: "2023-09-15",
        content: `
            <p>在日常生活中，隐喻无处不在。我们说"时间就是金钱"，这反映了现代社会对效率的追求；
            我们说"生活是一场旅行"，这体现了人们对人生历程的理解。本文将通过分析这些常见的隐喻，
            探讨它们如何影响我们的思维方式和行为模式。</p>
            
            <p>首先，我们来看"争论是战争"这个概念隐喻。当我们说"他抨击了我的观点"、"她的论点不堪一击"时，
            我们其实是用战争的概念来理解和表达争论。这种隐喻会影响我们处理分歧的方式，让我们倾向于将对方视为敌人，
            而不是合作者。</p>
        `
    },
    2: {
        id: 2,
        title: "信息分析课程作业：豆瓣读书数据分析",
        date: "2023-10-20",
        content: `
            <p>本研究通过爬取豆瓣读书平台的数据，分析了过去一年中用户的阅读偏好和评分模式。
            研究发现，专业类书籍的评分普遍较高，而文学类作品的评分差异较大。</p>
            
            <p>数据显示，技术类书籍的平均评分为4.2分，其中程序设计类书籍最受欢迎。
            文学类作品的评分范围从2.5分到4.8分不等，反映了读者对文学作品的态度较为两极化。</p>
        `
    }
};

// 辅助函数：生成摘要
export function generateSummary(content: string, maxLength: number = 100): string {
    // 移除HTML标签
    const plainText = content.replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    
    // 如果文本长度小于最大长度，直接返回
    if (plainText.length <= maxLength) {
        return plainText;
    }
    
    // 截取指定长度，并确保不会截断词语
    let summary = plainText.slice(0, maxLength);
    const lastSpace = summary.lastIndexOf(' ');
    
    // 如果找到空格，从空格处截断
    if (lastSpace > 0) {
        summary = summary.slice(0, lastSpace);
    }
    
    return summary + '...';
} 