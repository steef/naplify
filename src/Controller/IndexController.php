<?php

namespace App\Controller;

use App\Entity\Nap;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class IndexController extends AbstractController
{
    #[Route('/', name: 'index')]
    public function index(Request $request, EntityManagerInterface $entityManager): Response
    {
        if ($request->isMethod('POST')) {
            $napLength = $request->request->get('napLength');

            $entityManager->persist(new Nap($napLength));
            $entityManager->flush();

            return $this->redirectToRoute('nap', [
                'napLength' => $napLength
            ]);
        }

        return $this->render('index.html.twig');
    }

    #[Route('/nap', name: 'nap')]
    public function nap(Request $request): Response
    {
        $napLength = $request->query->get('napLength');

        if (!$napLength) {
            return $this->redirectToRoute('index');
        }

        return $this->render('nap.html.twig', [
            'napLength' => $napLength
        ]);
    }
}
