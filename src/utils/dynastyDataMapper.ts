import { DynastyDetail } from "../types/dynasty";
import { dynastyDetails } from "../data/dynastyDetails";

// 根据朝代ID获取详情数据
export function getDynastyDetailById(dynastyId: string): DynastyDetail | null {
  return dynastyDetails[dynastyId] || null;
}

