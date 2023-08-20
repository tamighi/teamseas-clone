<?php

namespace App\Controller;

use App\Repository\DonationRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class TotalDonationClass
{
  public function __construct(int $count) {
    $this->count = $count;
  }

  public int $count;
}

class TotalDonationController extends AbstractController
{
  public function __construct(private DonationRepository $repository)
  {
  }

  public function __invoke()
  {
    $count = $this->repository->getTotalDonation();

    return $this->json(new TotalDonationClass($count));
  }
}
