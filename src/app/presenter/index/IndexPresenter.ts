import { inject, injectable } from "inversify";
import { TYPES } from "../../../config/dependency/types";
import { IImageClassifier } from "../../model/combined-detector/IImageClassifier";
import { IIndexView } from "../../view/index/IIndexView";

@injectable()
export class IndexPresenter {
  constructor(
    @inject(TYPES.ImageClassifier) private imageClassifier: IImageClassifier,
    @inject(TYPES.IndexView) private indexView: IIndexView,
  ) {
    this.indexView.setPresenter(this);
  }

  async initialize(): Promise<void> {
    this.indexView.showLoading(true);
    await this.imageClassifier.load();
    this.indexView.showLoading(false);
  }

  async processFile(imageData: ImageData): Promise<void> {
    this.indexView.showLoading(true);
    const res = await this.imageClassifier.classify(imageData);
    this.indexView.updateResult(`class id: ${res.classId}, score: ${res.score})`);
    this.indexView.showLoading(false);
  }
}